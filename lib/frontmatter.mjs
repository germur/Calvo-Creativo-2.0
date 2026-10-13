import { parse } from 'yaml';

// Content files use YAML between two opening/closing --- lines.
export default function frontmatter(source) {
  const text = source.replace(/^\uFEFF/, '');
  if (!/^---\r?\n/.test(text)) return { data: {}, content: text };
  const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text);
  if (!match) throw new Error('Frontmatter YAML sin cierre ---');
  const data = parse(match[1], { version: '1.1', maxAliasCount: 50 }) || {};
  if (typeof data !== 'object' || Array.isArray(data)) throw new Error('Frontmatter debe ser un mapa YAML');
  return { data, content: text.slice(match[0].length) };
}
