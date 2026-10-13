import { Children, isValidElement, type ReactNode } from 'react';

export function textContent(node: ReactNode): string {
  return Children.toArray(node).map(child => isValidElement<{children?: ReactNode}>(child)
    ? textContent(child.props.children) : String(child)).join('');
}
export function headingId(node: ReactNode): string {
  return textContent(node).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
export function markdownToc(markdown: string) {
  return [...markdown.matchAll(/^(#{2,3})\s+(.+)$/gm)].map((match) => ({
    level: match[1].length,
    text: match[2].replace(/[*_`]/g, ''),
    id: headingId(match[2].replace(/[*_`]/g, '')),
  }));
}
