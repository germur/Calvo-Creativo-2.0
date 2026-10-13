import type { APIRoute } from 'astro';
import { generateOg } from '@/src/server/og';

export const prerender = false;
export const GET: APIRoute = ({ url }) => generateOg(url);
