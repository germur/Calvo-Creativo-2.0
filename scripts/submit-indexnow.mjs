import fs from 'fs';
import path from 'path';
import https from 'https';

const API_KEY = 'a78e75bf22894fff873fd94b80dd30f2';
const HOST = 'calvocreativo.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SUBMIT_ENDPOINT = 'https://api.indexnow.org/indexnow';

const PAGES_DIR = path.join(process.cwd(), 'pages');
const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

// Helper to get all file paths recursively
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file) => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });

    return arrayOfFiles;
}

// Generate URL list
function getUrlList() {
    const urls = [];

    // 1. Static Pages
    const pageFiles = getAllFiles(PAGES_DIR);
    pageFiles.forEach((file) => {
        // Ignore internal Next.js files and API routes
        if (file.includes('/api/') || file.includes('/_') || file.includes('.DS_Store')) return;

        let route = file
            .replace(PAGES_DIR, '')
            .replace(/\.(tsx|js|jsx)$/, '')
            .replace('/index', '');

        // Handle dynamic routes (simple logic: skip them or map them manually if known)
        // For this script, we'll skip dynamic routes containing brackets [] to avoid 404s
        // unless we strictly know the IDs. We will handle posts separately.
        if (route.includes('[')) return;

        if (route === '') route = '/'; // Home
        urls.push(`https://${HOST}${route}`);
    });

    // 2. Blog Posts (Dynamic: /liner-notes/[slug])
    if (fs.existsSync(POSTS_DIR)) {
        const postFiles = fs.readdirSync(POSTS_DIR);
        postFiles.forEach((file) => {
            if (file.endsWith('.md')) {
                const slug = file.replace('.md', '');
                urls.push(`https://${HOST}/liner-notes/${slug}`);
            }
        });
    }

    // Deduplicate
    return [...new Set(urls)];
}

async function submitToIndexNow() {
    const urlList = getUrlList();

    if (urlList.length === 0) {
        console.log('No URLs found to submit.');
        return;
    }

    console.log(`Preparing to submit ${urlList.length} URLs to IndexNow...`);
    console.log('Sample URLs:', urlList.slice(0, 3));

    const data = JSON.stringify({
        host: HOST,
        key: API_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urlList,
    });

    const options = {
        hostname: 'api.indexnow.org',
        port: 443,
        path: '/indexnow',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': data.length,
        },
    };

    const req = https.request(options, (res) => {
        let responseBody = '';

        res.on('data', (chunk) => {
            responseBody += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200 || res.statusCode === 202) {
                console.log('✅ Success! URLs submitted to IndexNow.');
            } else {
                console.error(`❌ Error: ${res.statusCode} - ${res.statusMessage}`);
                console.error('Response:', responseBody);
            }
        });
    });

    req.on('error', (error) => {
        console.error('❌ Request Error:', error);
    });

    req.write(data);
    req.end();
}

submitToIndexNow();
