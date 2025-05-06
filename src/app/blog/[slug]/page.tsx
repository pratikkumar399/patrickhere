import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MdxContent } from '@/components/MdxContent'
import rehypePrettyCode from 'rehype-pretty-code'

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const files = fs.readdirSync('src/blogs');
    return files.map((file) => ({
        slug: file.replace('.mdx', ''),
    }));
}




type BlogPageProps = {
    params: Promise<{ slug: string }>
};

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params;

    try {
        const filePath = path.join('src/blogs', `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data: frontmatter, content } = matter(fileContent);

        const mdxSource = await serialize(content, {
            mdxOptions: {
                rehypePlugins: [
                    [rehypePrettyCode, {
                        theme: {
                            light: 'github-light',
                            dark: 'github-dark',
                        },
                    }]
                ]
            }
        });

        return (
            <main className="px-4">
                <h1 className="text-2xl font-bold underline">{frontmatter.title}</h1>
                <p className="text-sm text-gray-500">{frontmatter.date}</p>
                <MdxContent source={mdxSource} />
            </main>
        );
    } catch (error) {
        console.error('❌ Error rendering blog page:', error);
        return <div className="text-red-500 p-4">Failed to load blog content.</div>;
    }
}
