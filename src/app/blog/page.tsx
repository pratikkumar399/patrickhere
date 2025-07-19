// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import React from "react";
import BlogCard from "@/components/generalUi/blogCard";

type BlogData = {
    title: string;
    description: string;
    author: string;
    date: string;
    image: string;
};

function getBlogsData(): BlogData[] {
    const blogDir = path.join(process.cwd(), "src/blogs");
    const files = fs.readdirSync(blogDir);

    const blogs = files.map((file) => {
        const fileContent = fs.readFileSync(path.join(blogDir, file), "utf-8");
        const { data } = matter(fileContent);
        return { ...data as BlogData, slug: file.replace(".mdx", "") };
    });

    return blogs;
}

const BlogPage = () => {
    const blogs = getBlogsData(); // ✅ Server component = runs on server, so fs works

    return (
        <div >
            <p className='text-xl font-mono underline mt-10 mb-10'>my blogs</p>
            {blogs.map((post, index) => (
                <BlogCard key={index} blog={post} />
            ))}

        </div>
    );
};

export default BlogPage;
