// app/blog/[slug]/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MdxContent } from '@/components/MdxContent'
import rehypePrettyCode from 'rehype-pretty-code'


export async function generateStaticParams() {
    const files = fs.readdirSync('src/blogs')
    return files.map((file) => ({
        slug: file.replace('.mdx', '')
    }))
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const filePath = path.join('src/blogs', `${params.slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data: frontmatter, content } = matter(fileContent)
    // app/blog/[slug]/page.tsx

    // Inside your existing code
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
    })


    return (
        <main className="px-4">
            <h1 className='text-2xl font-bold underline'>{frontmatter.title}</h1>
            <p className="text-sm text-gray-500">{frontmatter.date}</p>
            <MdxContent source={mdxSource} />
        </main>
    )
}
