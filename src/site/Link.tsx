import type { AnchorHTMLAttributes } from 'react';

export default function Link({ href, prefetch, replace, scroll, shallow, legacyBehavior, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & Record<string, any>) {
  return <a href={href} {...props} />;
}
