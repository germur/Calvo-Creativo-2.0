import type { ImgHTMLAttributes } from 'react';

export default function Image({ src, alt, fill, priority, quality, unoptimized, placeholder, blurDataURL, loader, style, ...props }: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {src: string | {src: string}} & Record<string, any>) {
  const original = typeof src === 'string' ? src : src?.src;
  const localRaster = original?.startsWith('/') && /\.(jpe?g|png|webp|avif)(\?|$)/i.test(original);
  const optimized = !unoptimized && localRaster;
  const imageUrl = (width?: number) => `/.netlify/images?${new URLSearchParams({ url: original, q: String(quality || 80), ...(width ? { w: String(width) } : {}) })}`;
  const widths = [320, 640, 960, 1280, 1920];
  return <img {...props} src={optimized ? imageUrl(Number(props.width) || 1280) : original} alt={alt || ''}
    srcSet={optimized ? widths.map(width => `${imageUrl(width)} ${width}w`).join(', ') : props.srcSet}
    sizes={props.sizes || (fill ? '(max-width: 768px) 100vw, 50vw' : props.width ? `${props.width}px` : '100vw')}
    fetchPriority={priority ? 'high' : 'auto'}
    loading={priority ? 'eager' : (props.loading || 'lazy')} decoding="async"
    style={fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%', ...style } : style} />;
}
