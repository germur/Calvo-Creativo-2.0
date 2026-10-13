import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SiteProvider, type PageContext } from './context';

export function renderPage(component: React.ComponentType<any>, props: Record<string, unknown>, url: URL, params: Record<string, string | undefined>) {
  const context: PageContext = { pathname: url.pathname.replace(/\/$/, '') || '/', params, head: [], islands: [] };
  const body = renderToStaticMarkup(<SiteProvider value={context}>{React.createElement(component, props)}</SiteProvider>);
  const chunks = body.split(/<template data-calvo-island="\d+"><\/template>/);
  return { head: context.head.join(''), chunks, islands: context.islands };
}
