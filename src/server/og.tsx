import { ImageResponse } from '@vercel/og';

export function generateOg(url: URL) {
  const title = (url.searchParams.get('title') || 'Calvo Creativo').slice(0, 180);
  const date = (url.searchParams.get('date') || '').slice(0, 40);
  const tags = (url.searchParams.get('tags') || '').split(',').filter(Boolean).slice(0, 4).map(tag => tag.slice(0, 30));
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#F8F5F0', color: '#0A0A0A', border: '20px solid #0A0A0A', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', fontSize: 28, fontWeight: 700 }}>CALVO CREATIVO · SEO & GEO</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {date && <div style={{ display: 'flex', fontSize: 24, color: '#E11D48' }}>{date}</div>}
        <div style={{ display: 'flex', fontSize: title.length > 90 ? 48 : 68, fontWeight: 700, lineHeight: 1.05 }}>{title}</div>
      </div>
      <div style={{ display: 'flex', gap: 16, fontSize: 22 }}>{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </div>,
    { width: 1200, height: 630, headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800' } },
  );
}
