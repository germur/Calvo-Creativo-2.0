import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const opinionDirectory = path.join(process.cwd(), 'content/opinion');

// Helper to get directory path
const getDirectory = (type: 'posts' | 'opinion' = 'posts') => {
    return type === 'opinion' ? opinionDirectory : postsDirectory;
}

export function getSortedPostsData(type: 'posts' | 'opinion' = 'posts') {
    const directory = getDirectory(type);
    if (!fs.existsSync(directory)) {
        return [];
    }
    const fileNames = fs.readdirSync(directory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md') && !fileName.startsWith('_'))
        .map((fileName) => {
            try {
                const id = fileName.replace(/\.md$/, '');
                const fullPath = path.join(directory, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const matterResult = matter(fileContents);

                return {
                    id,
                    date: matterResult.data.date || matterResult.data.publishDate || '',
                    updatedDate: matterResult.data.updatedDate || null,
                    title: matterResult.data.title || '',
                    tags: matterResult.data.tags || [],
                    category: matterResult.data.category || null,
                    ...matterResult.data,
                };
            } catch (error) {
                console.error(`Error processing file ${fileName}:`, error);
                return null;
            }
        })
        .filter((post) => post !== null); // Remove nulls

    return allPostsData.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
    });
}

export function getAllPostIds(type: 'posts' | 'opinion' = 'posts') {
    const directory = getDirectory(type);
    if (!fs.existsSync(directory)) {
        return [];
    }
    const fileNames = fs.readdirSync(directory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id: string, type: 'posts' | 'opinion' = 'posts') {
    const directory = getDirectory(type);
    const fullPath = path.join(directory, `${id}.md`);

    // Check if file exists to avoid crash
    if (!fs.existsSync(fullPath)) {
        throw new Error(`Post not found: ${id} in ${type}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        id,
        contentHtml: matterResult.content,
        date: matterResult.data.date || matterResult.data.publishDate || '',
        title: matterResult.data.title || '',
        tags: matterResult.data.tags || [],
        category: matterResult.data.category || null,
        ...matterResult.data,
    };
}
