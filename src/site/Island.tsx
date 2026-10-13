import { useContext } from 'react';
import { SiteContext } from './context';

export function Island({ name, islandProps = {} }: { name: string; islandProps?: Record<string, unknown> }) {
  const context = useContext(SiteContext);
  const index = context.islands.push({ name, props: islandProps }) - 1;
  return <template data-calvo-island={index} />;
}
