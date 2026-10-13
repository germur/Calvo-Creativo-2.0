import fs from 'fs';
import path from 'path';
import https from 'https';

const API_KEY = 'a78e75bf22894fff873fd94b80dd30f2';
const HOST = 'calvocreativo.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SUBMIT_ENDPOINT = 'https://api.indexnow.org/indexnow';

const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');
const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

function getUrlList() {
    const file = path.join(process.cwd(), 'dist', 'sitemap-0.xml');
    if (!fs.existsSync(file)) throw new Error('Run npm run build first.');
    return [...fs.readFileSync(file, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
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
