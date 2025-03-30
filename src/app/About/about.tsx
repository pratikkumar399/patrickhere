"use client"
import { fetchBlogs } from '@/services/fetchBlogs'
import React, { useEffect, useState } from 'react'


type Blogs = {
    title: string;
    pubDate: string;
    link: string;
}

const About = () => {

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

    console.log(blogsInfo);



    return (
        <div>
            <p className='text-3xl underline'  >pratikRai</p>
            <p className='text-l pt-4'  >
                Hi, I&apos;m Pratik Rai, a software developer.
                <br />
                I love writing blogs and creating projects out of my ideas.
            </p>

            <h3 className='text-xl pt-7' >Checkout my blogs</h3>

            {isLoading ?
                <div className='pt-4'>
                    Loading blogs...
                </div>
                :
                <div className='flex flex-col gap-4 pt-4'>
                    {blogsInfo?.map((blog, index) => (
                        <div key={index} className='flex gap-4 items-center'>
                            <a href={blog.link} target='_blank' rel='noopener noreferrer'>
                                <p className='text-sm italic'>{blog.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            }

        </div>
    )
}

export default About;