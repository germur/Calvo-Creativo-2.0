import React, { createContext, useContext } from 'react';

export interface PageContext {
  pathname: string;
  params: Record<string, string | undefined>;
  head: string[];
  islands: { name: string; props: Record<string, unknown> }[];
}
export const SiteContext = createContext<PageContext>({ pathname: '/', params: {}, head: [], islands: [] });
export function useRouter() {
  const { pathname, params } = useContext(SiteContext);
  return { pathname, asPath: pathname, query: params };
}
export function SiteProvider({ value, children }: { value: PageContext; children: React.ReactNode }) {
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
