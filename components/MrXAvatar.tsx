'use client';
import React, { useState, useEffect, useRef } from 'react';

// ===========================================================================
// <MrXAvatar> — Simpsons "Mr. X" identity gag
// Reference: The Simpsons S10E13 — Homer starts an anonymous blog called
// "Mr. X" to expose Springfield's secrets and wins a Pulitzer Prize.
//
// Animation sequence:
//   1. Photo of Roger fades in       ("this is who I am")
//   2. Paper bag drops on head       ("j/k, I'm Mr. X")
//   3. "Mr. X" italic label appears
//   4. Hover lifts the bag → reveals Roger
//   5. Print: bag + label hidden     (only photo shows in PDFs)
// ===========================================================================

interface MrXAvatarProps {
    /** Pixel size of the avatar square */
    size?: number;
    /** URL/path to the photo. Falls back to silhouette SVG if 404. */
    photoSrc?: string;
    /** Enable WebAudio SFX — paper bag thunk on drop */
    sound?: boolean;
    /** Background fill behind the photo */
    bgColor?: string;
}

type Phase = 'idle' | 'photoIn' | 'bagDrop' | 'labelIn' | 'done';

export default function MrXAvatar({
    size = 120,
    photoSrc = '/images/roger-calvo.jpg',
    sound = true,
    bgColor = '#f4a574',          // Simpsons orange
}: MrXAvatarProps) {
    const [phase, setPhase] = useState<Phase>('idle');
    const [imgFailed, setImgFailed] = useState(false);
    const [hovered, setHovered] = useState(false);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const startedRef = useRef(false);

    // ── Audio ────────────────────────────────────────────────────────────────
    const ensureCtx = (): AudioContext | null => {
        if (!sound || typeof window === 'undefined') return null;
        if (!audioCtxRef.current) {
            try {
                audioCtxRef.current = new (window.AudioContext ||
                    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
            } catch { /* no-op */ }
        }
        return audioCtxRef.current;
    };

    const bagThunk = () => {
        const ctx = ensureCtx();
        if (!ctx) return;
        const t = ctx.currentTime;
        const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.22), ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            const env = Math.pow(1 - i / data.length, 2);
            data[i] = (Math.random() * 2 - 1) * env;
        }
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const filt = ctx.createBiquadFilter();
        filt.type = 'lowpass';
        filt.frequency.value = 320;
        filt.Q.value = 4;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.6, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
        src.connect(filt).connect(g).connect(ctx.destination);
        src.start(t);
        src.stop(t + 0.24);
    };

    // ── Animation sequence ───────────────────────────────────────────────────
    useEffect(() => {
        if (startedRef.current) return;
        startedRef.current = true;
        const timers: ReturnType<typeof setTimeout>[] = [];
        const t = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

        t(() => setPhase('photoIn'), 400);
        t(() => { setPhase('bagDrop'); bagThunk(); }, 2200);
        t(() => setPhase('labelIn'), 2700);
        t(() => setPhase('done'), 3200);

        return () => timers.forEach(clearTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ── Derived values ───────────────────────────────────────────────────────
    const photoOpacity = phase === 'idle' ? 0 : 1;
    const showBag = phase === 'bagDrop' || phase === 'labelIn' || phase === 'done';
    const bagY = showBag ? (hovered ? -110 : 0) : -110;
    const showLabel = phase === 'labelIn' || phase === 'done';

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            title={hovered ? 'Roger Murillo' : 'a.k.a. Mr. X'}
            style={{
                position: 'relative',
                width: size,
                flexShrink: 0,
                cursor: 'pointer',
                paddingTop: size * 0.5,   // space above for the "Mr. X" label
            }}
        >
            {/* "Mr. X" label — hidden on print */}
            <div
                className="mrx-label"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '-6%',
                    width: '112%',
                    textAlign: 'left',
                    opacity: showLabel ? 1 : 0,
                    transform: showLabel ? 'rotate(-3deg) scale(1)' : 'rotate(-3deg) scale(0.7)',
                    transformOrigin: 'left top',
                    transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(.2,1.6,.4,1)',
                    pointerEvents: 'none',
                }}
            >
                <div style={{
                    display: 'inline-block',
                    fontFamily: "'Newsreader', 'Georgia', serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#0f0f0e',
                    lineHeight: 0.85,
                    paddingLeft: size * 0.05,
                }}>
                    <span style={{ fontSize: size * 0.26 }}>Mr.</span>
                    <span style={{
                        fontSize: size * 0.5,
                        display: 'inline-block',
                        marginLeft: size * 0.06,
                    }}>X</span>
                </div>
            </div>

            {/* Avatar frame */}
            <div style={{
                width: size,
                height: size,
                background: bgColor,
                border: '2px solid #0f0f0e',
                overflow: 'hidden',
                position: 'relative',
            }}>
                {/* Photo (fades in) */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: photoOpacity,
                    transition: 'opacity 0.6s ease',
                }}>
                    {!imgFailed ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={photoSrc}
                            alt="Roger Murillo"
                            onError={() => setImgFailed(true)}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    ) : (
                        /* Silhouette fallback */
                        <svg viewBox="0 0 100 100" width="100%" height="100%">
                            <rect width="100" height="100" fill="#e8e4dc" />
                            <ellipse cx="50" cy="36" rx="20" ry="23" fill="#0f0f0e" />
                            <path d="M 8 100 Q 8 62 50 58 Q 92 62 92 100 Z" fill="#0f0f0e" />
                            <path d="M 38 80 L 50 92 L 62 80 L 62 100 L 38 100 Z" fill="#fafaf7" />
                        </svg>
                    )}
                </div>

                {/* Paper bag — hidden on print */}
                <svg
                    className="mrx-bag"
                    viewBox="0 0 100 100"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        transform: `translateY(${bagY}%)`,
                        transition: phase === 'bagDrop'
                            ? 'transform 0.3s cubic-bezier(.6,1.4,.6,1)'
                            : 'transform 0.35s ease',
                        pointerEvents: 'none',
                    }}
                >
                    {/* Bag shape */}
                    <path
                        d="M 22 8 L 26 4 L 32 7 L 40 3 L 50 6 L 60 3 L 68 7 L 74 4 L 78 8 L 80 70 L 20 70 Z"
                        fill="#0f0f0e"
                    />
                    {/* "?" on the bag */}
                    <text
                        x="50" y="44"
                        textAnchor="middle"
                        fontFamily="'Newsreader', serif"
                        fontSize="34"
                        fontWeight="700"
                        fontStyle="italic"
                        fill="#fafaf7"
                    >?</text>
                </svg>
            </div>

            {/* Hover hint */}
            <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: 4,
                fontFamily: "'DM Mono', 'Courier New', monospace",
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#888',
                opacity: phase === 'done' || phase === 'labelIn' ? 1 : 0,
                transition: 'opacity 0.3s ease',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
            }}>
                {hovered ? '↑ unmasked' : 'hover ↑'}
            </div>
        </div>
    );
}
