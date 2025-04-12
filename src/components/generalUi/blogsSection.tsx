"use client"
import React from 'react'
import { blogPosts } from '@/lib/blogData'
import BlogCard from './blogCard'


const BlogsSection = () => {
    return (
        <div>
            <h3 className='text-xl pt-7' >Checkout my recent blogs</h3>

            <div className='flex flex-col gap-4 pt-4 '>
                {blogPosts?.slice(0, 4).map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default BlogsSection;