import { BlogPost } from '@/types/types';
import React from 'react'
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

export default function BlogCard({ blog }: { blog: BlogPost }) {
    console.log(blog)
    return (
        <Link
            className={'flex flex-col gap-2 border border-zinc-800 rounded-md p-4 my-3 hover:scale-105 transition-all'}

            href={blog.link}
        >
            <h1 className="text-xl font-extrabold text-gray-300">
                {blog.title}
            </h1>
            <div className="flex gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                    <CalendarDays height={16} width={16} />
                    <span className="text-sm ">{blog.date}</span>
                </div>

            </div>

        </Link>
    );
}
