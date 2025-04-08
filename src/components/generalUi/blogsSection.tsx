"use client"
import { fetchBlogs } from '@/services/fetchBlogs'
import React, { useEffect, useState } from 'react'
import { ArrowRight } from "lucide-react";
import { BlogCard, CardContent, CardFooter, CardHeader } from '../ui/blogCard';
import Image from 'next/image';

const extractImage = (htmlString: string): string | null => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const img = doc.querySelector("img");
    return img?.src || null;
};


type Blogs = {
    title: string;
    pubDate: string;
    link: string;
}

const BlogsSection = () => {

    const [blogsInfo, setBlogsInfo] = useState<Blogs[]>();
    const [isLoading, setIsLoading] = useState(false);

    const blogsData = async () => {
        setIsLoading(true);
        const { response, error } = await fetchBlogs();
        setBlogsInfo(response?.items);
        if (error) {
            console.error("Error fetching blogs: ", error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        blogsData();
    }, [])

    console.log("blogsInfo: ", blogsInfo);

    return (
        <div>
            <h3 className='text-xl pt-7 pb-4' >Checkout my recent blogs</h3>

            {isLoading ?
                <div className='pt-4'>
                    Loading blogs...
                </div>
                :
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                    {blogsInfo?.slice(0, 6).map((post, index) => (
                        // <div key={index} className='flex gap-4 items-center'>
                        //     <a href={blog.link} target='_blank' rel='noopener noreferrer'>
                        //         <p className='text-sm italic'>{blog.title}</p>
                        //     </a>
                        // </div>
                        <BlogCard key={index} className="grid grid-rows-[auto_auto_1fr_auto]">
                            {/* <div className="aspect-[16/9] w-full">
                                <a
                                    href={post.link}
                                    target="_blank"
                                    className="transition-opacity duration-200 fade-in hover:opacity-70"
                                >
                                    <Image
                                        src={""}
                                        alt={post.title}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </a>
                            </div> */}
                            <CardHeader>
                                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                                    <a href={post.link} target="_blank">
                                        {post.title}
                                    </a>
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{post.summary}</p>
                            </CardContent>
                            <CardFooter>
                                <a
                                    href={post.link}
                                    target="_blank"
                                    className="flex items-center text-foreground hover:underline"
                                >
                                    Read more
                                    <ArrowRight className="ml-2 size-4" />
                                </a>
                            </CardFooter>
                        </BlogCard>
                    ))}
                </div>
            }

        </div>
    )
}

export default BlogsSection;