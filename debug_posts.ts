
import { getAllPostIds, getSortedPostsData } from './lib/posts';

console.log('--- Testing Opinion Posts ---');
const ids = getAllPostIds('opinion');
console.log('Ids:', JSON.stringify(ids, null, 2));

const posts = getSortedPostsData('opinion');
console.log('Posts:', JSON.stringify(posts, null, 2));
