import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

export default function handler(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Dynamic params
        const title = searchParams.get('title') || 'Calvo Creativo';
        const date = searchParams.get('date');
        const tags = searchParams.get('tags')?.split(',') || [];

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #e5e7eb 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e5e7eb 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        padding: '40px',
                        border: '20px solid #000',
                        fontFamily: '"Inter", sans-serif',
                    }}
                >
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#000',
                                borderRadius: '50%',
                            }}
                        />
                        <span
                            style={{
                                fontSize: 24,
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#000',
                            }}
                        >
                            Calvo Creativo
                        </span>
                    </div>

                    {/* Main Title */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {date && (
                            <div
                                style={{
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    padding: '5px 15px',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    alignSelf: 'flex-start',
                                }}
                            >
                                {date}
                            </div>
                        )}
                        <div
                            style={{
                                fontSize: 70,
                                fontWeight: 900,
                                color: '#000',
                                lineHeight: 0.9,
                                textTransform: 'uppercase',
                                letterSpacing: '-0.05em',
                                maxWidth: '900px',
                            }}
                        >
                            {title}
                        </div>
                    </div>

                    {/* Footer / Tags */}
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                style={{
                                    border: '2px solid #000',
                                    padding: '5px 20px',
                                    fontSize: 20,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    color: '#000',
                                }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
