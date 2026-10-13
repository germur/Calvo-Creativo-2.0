import type { APIRoute } from 'astro';
import { keywordResponse } from '@/src/server/keywords';

export const prerender = false;
export const GET: APIRoute = ({ url }) => keywordResponse(url);
export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { Allow: 'GET' } });
