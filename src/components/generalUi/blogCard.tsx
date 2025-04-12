import { BlogPost } from '@/types/types';
import React from 'react'
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

export default function BlogCard({ blog }: { blog: BlogPost }) {
    return (
        <Link
            className={'flex flex-col gap-2 border border-zinc-800 rounded-md p-4 my-3 hover:scale-105 transition-all'}
            style={{
                backgroundColor: 'rgba(15, 15, 15, 1)',
                backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
                backgroundSize: '20px 20px'
            }}

            href={blog.link}
        >
            <h1 className="text-2xl font-extrabold">
                {blog.title}
            </h1>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <CalendarDays />
                    <span className="text-sm">{blog.date}</span>
                </div>

            </div>

        </Link>
    );
}
