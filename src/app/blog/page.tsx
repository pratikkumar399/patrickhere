// app/blog/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogCard from '@/components/generalUi/blogCard'

export default function BlogList() {
    const files = fs.readdirSync('src/blogs')
    type Post = {
        link: string
        title: string
        date: string
    }

    const posts: Post[] = files.map((file) => {
        const slug = file.replace('.mdx', '/')
        const link = `/blog/${slug}`
        const fileContent = fs.readFileSync(path.join('src/blogs', file), 'utf8')
        const { data: frontmatter } = matter(fileContent)
        return { link, title: frontmatter.title, date: frontmatter.date }
    })
    return (
        <div >
            <p className='text-xl underline'>blogs</p>
            {posts.map((post, index) => (
                <BlogCard key={index} blog={post} />
            ))}
            {/* </ul> */}
        </div>
    )
}
