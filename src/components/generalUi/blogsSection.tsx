"use client"
import React from 'react'
import { blogPosts } from '@/lib/blogData'
import Link from 'next/link'
import { LucideArrowUpRight } from 'lucide-react'
import { SkillBadges } from './skillBadges';


const BlogsSection = () => {

    return (
        <div>
            <div className="flex flex-col gap-2  pt-8 ">
                <h2 className='text-xl text-purple-500' >skills</h2>
                <SkillBadges />
            </div>
            <h2 className='text-xl pt-12 text-blue-400' >checkout my technical articles</h2>

            <div className='flex flex-col gap-6 pt-4  mb-10'>
                {blogPosts?.slice(0, 4).map((blog, index) => (
                    <Link
                        href={`${blog.link}`}
                        target='_blank'
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-8 hover:scale-105 transition-transform"
                    >
                        <p className="list-none text-base text-gray-300 font-medium">
                            {blog.title}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{blog.date}</span>
                            <LucideArrowUpRight width={16} />
                        </div>
                    </Link>
                ))}
            </div>
            <span className='flex gap-2 pb-8'>
                <Link
                    href="https://x.com/twtsof_Pratik"
                    target="_blank"
                    className="underline ml-1"
                >
                    x  dot  com
                </Link>
                <Link
                    href="https://github.com/pratikkumar399"
                    target="_blank"
                    className="underline ml-1"
                >
                    github
                </Link>
            </span>
            <div className="flex justify-center">
                Made with 💓 by Pratik Rai
            </div>


        </div>
    )
}

export default BlogsSection;