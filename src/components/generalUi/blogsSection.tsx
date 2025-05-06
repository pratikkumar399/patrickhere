"use client"
import React from 'react'
import { blogPosts } from '@/lib/blogData'
import BlogCard from './blogCard'


const BlogsSection = () => {
    return (
        <div>
            <h3 className='text-xl pt-12 underline italic' >My recent technical articles</h3>

            <div className='flex flex-col gap-4 pt-4 '>
                {blogPosts?.slice(0, 4).map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </div>


            <div className="flex justify-center">
                Made with 💓 by Pratik Rai
            </div>
        </div>
    )
}

export default BlogsSection;