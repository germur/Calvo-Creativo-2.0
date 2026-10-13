import { useContext, type ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SiteContext } from './context';

// Collect page metadata while producing the static body. Each render owns its
// collector, so concurrent page builds cannot share metadata or canonical URLs.
export default function Head({ children }: { children: ReactNode }) {
  const context = useContext(SiteContext);
  context.head.push(renderToStaticMarkup(<>{children}</>));
  return null;
}
