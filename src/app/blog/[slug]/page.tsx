import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import GiscusComments from "@/components/GiscusComments";

type BlogFrontmatter = {
    title: string;
    author: string;
    description: string;
    date: string;
};

export async function generateStaticParams() {
    const blogsDir = path.join(process.cwd(), "src/blogs");
    const files = fs.readdirSync(blogsDir);

    return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => ({
            slug: file.replace(/\.mdx$/, ""),
        }));
}

export default async function Page({ params }: { params: any }) {
    const { slug } = params;
    const filepath = path.join(process.cwd(), "src/blogs", `${slug}.mdx`);

    if (!fs.existsSync(filepath)) {
        notFound();
    }

    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, {
            properties: {
                className: ['anchor'],
                'aria-hidden': 'true',
                tabIndex: -1
            },
            content: {
                type: 'element',
                tagName: 'span',
                properties: { className: ['anchor-icon'] },
                children: [{ type: 'text', value: '#' }],
            }
        })
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: "always",
                    feedbackDuration: 3000,
                }),
            ],
        })
        .use(rehypeStringify);

    const htmlContent = (await processor.process(content)).toString();
    const { title, author, description, date } = data as BlogFrontmatter;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className=" text-gray-100">
            {/* Enhanced styles for better content rendering */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    /* Clean prose styles */
                    .blog-prose {
                        color: #e5e7eb;
                        line-height: 1.8;
                        font-size: 1.1rem;
                    }
                    
                    .blog-prose h1 {
                        color: #f9fafb;
                        font-size: 2.5rem;
                        font-weight: 700;
                        margin: 3rem 0 1.5rem 0;
                        line-height: 1.2;
                        border-bottom: 2px solid #374151;
                        padding-bottom: 0.75rem;
                    }
                    
                    .blog-prose h2 {
                        color: #f3f4f6;
                        font-size: 2rem;
                        font-weight: 600;
                        margin: 2.5rem 0 1rem 0;
                        line-height: 1.3;
                        position: relative;
                    }
                    
                    .blog-prose h2:before {
                        content: '';
                        position: absolute;
                        left: -1rem;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 4px;
                        height: 1.5rem;
                        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                        border-radius: 2px;
                    }
                    
                    .blog-prose h3 {
                        color: #f3f4f6;
                        font-size: 1.5rem;
                        font-weight: 600;
                        margin: 2rem 0 0.75rem 0;
                        line-height: 1.4;
                    }
                    
                    .blog-prose h4 {
                        color: #f3f4f6;
                        font-size: 1.25rem;
                        font-weight: 600;
                        margin: 1.5rem 0 0.5rem 0;
                    }
                    
                    .blog-prose p {
                        margin: 1.5rem 0;
                        color: #d1d5db;
                    }
                    
                    .blog-prose strong {
                        color: #f9fafb;
                        font-weight: 600;
                    }
                    
                    .blog-prose a {
                        color: #60a5fa;
                        text-decoration: none;
                        font-weight: 500;
                        border-bottom: 1px solid transparent;
                        transition: all 0.2s ease;
                    }
                    
                    .blog-prose a:hover {
                        color: #93c5fd;
                        border-bottom-color: #93c5fd;
                    }
                    

                    .blog-prose ul {
                        margin: 1.5rem 0;
                        padding-left: 2rem;
                        list-style-type: disc; /* 🔥 show bullets */
                    }

                    .blog-prose ol {
                        margin: 1.5rem 0;
                        padding-left: 2rem;
                        list-style-type: decimal; /* 🔥 show numbers */
                    }

                    .blog-prose li {
                        margin: 0.75rem 0;
                        color: white;
                    }


                    
                    .blog-prose li::marker {
                        color: white;
                    }
                    
                    .blog-prose code:not(pre code) {
                        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
                        background-color: #1f2937;
                        color: #fbbf24;
                        padding: 0.25rem 0.5rem;
                        border-radius: 0.375rem;
                        font-weight: 500;
                        font-size: 0.9em;
                        border: 1px solid #374151;
                    }
                    
                    .blog-prose pre {
                        background-color: #0f172a !important;
                        border: 1px solid #1e293b;
                        border-radius: 0.75rem;
                        margin: 2rem 0;
                        overflow-x: auto;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
                    }
                    
                    .blog-prose blockquote {
                        border-left: 4px solid #3b82f6;
                        background-color: #1f2937;
                        margin: 2rem 0;
                        padding: 1.5rem 2rem;
                        border-radius: 0.5rem;
                        color: #d1d5db;
                        font-style: italic;
                        position: relative;
                    }
                    
                    .blog-prose blockquote:before {
                        content: '"';
                        font-size: 4rem;
                        color: #374151;
                        position: absolute;
                        top: -0.5rem;
                        left: 1rem;
                        line-height: 1;
                    }
                    
                    .blog-prose img {
                        border-radius: 0.75rem;
                        margin: 2rem auto;
                        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
                    }
                    
                    .blog-prose table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 2rem 0;
                        background-color: #1f2937;
                        border-radius: 0.5rem;
                        overflow: hidden;
                    }
                    
                    .blog-prose th,
                    .blog-prose td {
                        padding: 0.75rem 1rem;
                        text-align: left;
                        border-bottom: 1px solid #374151;
                    }
                    
                    .blog-prose th {
                        background-color: #374151;
                        font-weight: 600;
                        color: #f3f4f6;
                    }
                    
                    .anchor-icon {
                        opacity: 0;
                        margin-left: 0.5rem;
                        color: #6b7280;
                        transition: opacity 0.2s ease;
                        font-weight: normal;
                    }
                    
                    .blog-prose h1:hover .anchor-icon,
                    .blog-prose h2:hover .anchor-icon,
                    .blog-prose h3:hover .anchor-icon,
                    .blog-prose h4:hover .anchor-icon {
                        opacity: 1;
                    }
                `}} />

            <div className="max-w-4xl mx-auto  py-12">
                {/* Back to blog link */}
                <nav className="mb-8">
                    <a
                        href="/blog"
                        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span>Back to Blog</span>
                    </a>
                </nav>

                {/* Article header */}
                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    <div className="flex items-center space-x-6 mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">
                                    {author.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div>
                                <p className="text-white font-medium">{author}</p>
                                <p className="text-gray-400 text-sm">{formattedDate}</p>
                            </div>
                        </div>

                    </div>

                    {/* Description */}
                    <div className="">
                        <p className="text-gray-300 text-lg leading-relaxed italic">
                            {description}
                        </p>
                    </div>
                </header>

                {/* Main content */}
                <main className="mb-12">
                    <div
                        className="blog-prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    ></div>
                </main>

                {/* Comments section */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 md:p-12">
                    <div className="flex items-center space-x-3 mb-8">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <h2 className="text-2xl font-bold text-white">Discussion</h2>
                    </div>
                    <GiscusComments />
                </div>

                {/* Bottom navigation */}
                <div className="flex justify-center mt-12">
                    <a
                        href="/blog"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 text-white font-medium rounded-lg transition-all duration-200"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span>All Posts</span>
                    </a>
                </div>
            </div>
        </div>
    );
}