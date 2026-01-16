import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPostIds, getPostData, getSortedPostsData } from '@/lib/posts';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBox from '@/components/AuthorBox';
import { useState, useEffect } from 'react';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug);
    const allPosts = getSortedPostsData();

    // Semantic Clustering Logic
    const relatedPosts = allPosts
        .filter(post => post.id !== params.slug) // Exclude current
        .map(post => {
            // Calculate relevance score
            let score = 0;
            if (post.tags && postData.tags) {
                const sharedTags = post.tags.filter((tag: string) => postData.tags.includes(tag));
                score += sharedTags.length * 2;
            }
            if (post.category === postData.category) score += 3; // Boost same silo/category if exists

            return { ...post, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 3); // Take top 3

    return {
        props: {
            postData,
            relatedPosts
        },
    };
}

export default function Post({ postData, relatedPosts }: { postData: any, relatedPosts: any[] }) {
    // Generate ToC from raw markdown content
    const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);

    useEffect(() => {
        if (!postData.contentHtml) return;

        // Simple regex to find headings in markdown (assuming standard # syntax)
        const headingRegex = /^(#{2,3})\s+(.*)$/gm;
        const headings = [];
        let match;

        while ((match = headingRegex.exec(postData.contentHtml)) !== null) {
            const level = match[1].length; // 2 for ##, 3 for ###
            const text = match[2];
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            headings.push({ id, text, level });
        }
        setToc(headings);
    }, [postData.contentHtml]);

    // Custom components for ReactMarkdown to add IDs to headings
    const MarkdownComponents = {
        h2: ({ node, ...props }: any) => {
            const id = props.children[0].toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return <h2 id={id} {...props} />;
        },
        h3: ({ node, ...props }: any) => {
            const id = props.children[0].toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return <h3 id={id} {...props} />;
        }
    };

    return (
        <>
            <SeoHead
                title={postData.title}
                description={postData.description}
                type="article"
                image={postData.coverImage}
                author={postData.author}
                publishDate={postData.date}
                modifiedDate={postData.updatedDate}
            />
            {/* Added grain overlay via globals but applying bg-paper here */}
            <div className="flex min-h-screen flex-col bg-paper text-ink font-body selection:bg-accent selection:text-ink">
                <Navigation />

                <main className="flex-grow py-16 px-4 md:px-8 relative">

                    <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* LEFT COLUMN: Content (8 cols) */}
                        <div className="lg:col-span-8">
                            {/* Breadcrumb / Back */}
                            <div className="mb-4">
                                <Breadcrumbs theme="light" />
                            </div>
                            <div className="mb-8">
                                <Link href="/liner-notes" className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold text-ink hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary">
                                    <span className="material-symbols-outlined text-sm font-black">arrow_back</span> Volver al Terminal
                                </Link>
                            </div>

                            {/* Article Header */}
                            <header className="mb-12 border-b-4 border-ink pb-8">
                                <div className="flex flex-wrap gap-4 mb-6 items-center">
                                    <span className="bg-primary text-white text-[10px] font-bold uppercase px-2 py-1 shadow-brutal-sm">
                                        Published: {postData.publishDate || postData.date}
                                    </span>
                                    {postData.updatedDate && (
                                        <span className="bg-white text-ink border border-ink text-[10px] font-bold uppercase px-2 py-1 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[10px]">update</span>
                                            Updated: {postData.updatedDate}
                                        </span>
                                    )}
                                    {postData.tags && postData.tags.map((tag: any) => (
                                        <span key={tag} className="bg-secondary text-paper text-[10px] font-bold uppercase px-2 py-1">{tag}</span>
                                    ))}
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-[0.9] tracking-tighter text-ink mb-6">
                                    {postData.title}
                                </h1>

                                {/* TL;DR Box (GEO Optimization) */}
                                {postData.tldr && (
                                    <div className="my-8 bg-gray-100 border-l-8 border-acid-green p-6 shadow-sm">
                                        <h3 className="font-mono text-xs uppercase font-bold mb-2 flex items-center gap-2 text-ink">
                                            <span className="material-symbols-outlined text-sm">bolt</span>
                                            TL;DR (Executive Summary)
                                        </h3>
                                        <p className="font-body text-lg italic text-ink/80">
                                            {postData.tldr}
                                        </p>
                                    </div>
                                )}

                                {postData.excerpt && !postData.tldr && (
                                    <p className="text-xl md:text-2xl font-mono text-ink/70 leading-relaxed border-l-4 border-accent pl-6">
                                        {postData.excerpt}
                                    </p>
                                )}
                            </header>

                            {/* Article Content */}
                            <article className="prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:leading-snug prose-headings:text-ink prose-p:font-body prose-p:text-ink/90 prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-strong:font-black prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-white prose-blockquote:p-4 prose-blockquote:font-mono prose-blockquote:not-italic prose-img:border-4 prose-img:border-ink prose-img:shadow-brutal max-w-none">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={MarkdownComponents as any}
                                >
                                    {postData.contentHtml}
                                </ReactMarkdown>
                            </article>

                            {/* Author Box (E-E-A-T) */}
                            <AuthorBox />

                            {/* Article Footer & Disclaimer */}
                            <div className="mt-16 pt-8 border-t-2 border-ink border-dashed flex flex-col gap-6">
                                <div className="flex justify-between items-center">
                                    <div className="font-mono text-xs text-ink/50 uppercase">End of Transmission</div>
                                    <div className="flex gap-4">
                                        <a
                                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(postData.title)}&url=https://calvocreativo.com/liner-notes/${postData.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="size-10 bg-white border-2 border-ink shadow-brutal-sm flex items-center justify-center hover:translate-y-[-2px] transition-transform text-ink hover:text-primary"
                                            aria-label="Share on X (Twitter)"
                                        >
                                            <span className="material-symbols-outlined">alternate_email</span>
                                        </a>
                                        <a
                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://calvocreativo.com/liner-notes/${postData.id}&title=${encodeURIComponent(postData.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="size-10 bg-accent border-2 border-ink shadow-brutal-sm flex items-center justify-center hover:translate-y-[-2px] transition-transform text-ink"
                                            aria-label="Share on LinkedIn"
                                        >
                                            <span className="material-symbols-outlined">work</span>
                                        </a>
                                    </div>
                                </div>

                                {/* AI Transparency Disclaimer */}
                                <div className="bg-gray-50 p-4 border border-gray-200 text-[10px] font-mono text-gray-500 text-center uppercase tracking-wider">
                                    <span className="flex items-center justify-center gap-1 mb-1">
                                        <span className="material-symbols-outlined text-xs">smart_toy</span>
                                        AI Policy compliant
                                    </span>
                                    Contenido redactado y curado por humanos. Asistido por Inteligencia Artificial para investigación y análisis de datos.
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Sidebar (4 cols) - Hidden on mobile, sticky on desktop */}
                        <aside className="hidden lg:block lg:col-span-4 relative">
                            <div className="sticky top-32">
                                <div className="bg-white border-2 border-ink shadow-brutal p-6">
                                    <h4 className="font-mono text-xs uppercase font-bold text-ink mb-4 border-b-2 border-ink pb-2">
                                        Index_
                                    </h4>
                                    <nav>
                                        <ul className="space-y-3 font-mono text-sm">
                                            {toc.length > 0 ? toc.map((heading) => (
                                                <li key={heading.id} style={{ paddingLeft: (heading.level - 2) * 16 }}>
                                                    <a href={`#${heading.id}`} className="text-ink/60 hover:text-primary hover:font-bold transition-all block truncate">
                                                        {heading.text}
                                                    </a>
                                                </li>
                                            )) : (
                                                <li className="text-gray-400 italic text-xs">Scanning headers...</li>
                                            )}
                                        </ul>
                                    </nav>

                                    <div className="mt-8 bg-black text-white p-4 text-center">
                                        <p className="font-display uppercase text-lg leading-none mb-2">Build The Future</p>
                                        <p className="font-mono text-[10px] text-gray-400 mb-4">Master SEO Engineering.</p>
                                        <Link href="/lab" className="block w-full bg-primary py-2 font-bold uppercase hover:bg-white hover:text-black transition-colors">
                                            Access Lab
                                        </Link>
                                    </div>
                                </div>

                                {/* Related Posts Cluster */}
                                {(postData as any).relatedPosts && (postData as any).relatedPosts.length > 0 && (
                                    <div className="mt-8 bg-stone-light border-2 border-ink p-6 shadow-brutal-sm">
                                        <h4 className="font-mono text-xs uppercase font-bold text-ink mb-4 border-b-2 border-ink pb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">hub</span>
                                            Similares
                                        </h4>
                                        <ul className="space-y-4">
                                            {(postData as any).relatedPosts.map((post: any) => (
                                                <li key={post.id} className="group">
                                                    <Link href={`/liner-notes/${post.id}`} className="block">
                                                        <span className="text-[10px] font-bold text-primary uppercase block mb-1">
                                                            {post.date}
                                                        </span>
                                                        <h5 className="font-display text-lg uppercase leading-none group-hover:text-primary transition-colors">
                                                            {post.title}
                                                        </h5>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </aside>

                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
