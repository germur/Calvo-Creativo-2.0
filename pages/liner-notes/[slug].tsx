import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }: { postData: any }) {
    return (
        <>
            <SeoHead title={postData.title} description={postData.description || 'Artículo del blog.'} />
            <div className="flex min-h-screen flex-col bg-[#f0f0f0] text-black font-mono selection:bg-primary selection:text-black">
                <Navigation />
                <main className="flex-grow py-16 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <Link href="/liner-notes" className="inline-block mb-8 font-mono text-sm uppercase tracking-widest hover:text-[#f9f506] transition-colors py-2 px-4 bg-black text-white hover:bg-black/90">
                            ← Volver al Index
                        </Link>

                        <article className="prose prose-lg prose-headings:font-headline prose-headings:uppercase prose-headings:tracking-tight prose-p:font-mono prose-p:text-sm prose-img:border-2 prose-img:border-black prose-img:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] max-w-none prose-a:text-[#f20d0d] hover:prose-a:text-black">
                            <h1 className="text-4xl md:text-5xl font-headline uppercase mb-4">{postData.title}</h1>
                            <div className="flex gap-4 mb-8 text-xs font-bold text-gray-500 uppercase border-b border-gray-200 pb-4">
                                <span>{postData.publishDate}</span>
                                <span>•</span>
                                <span>{Array.isArray(postData.tags) ? postData.tags.join(', ') : 'SEO'}</span>
                            </div>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.contentHtml}</ReactMarkdown>
                        </article>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
