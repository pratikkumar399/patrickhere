import { BlogPost } from '@/types/types';
import React from 'react';
import Link from 'next/link';
import { LucideArrowUpRight } from 'lucide-react';

export default function BlogCard({ blog }: any) {
    return (
        <Link
            href={`/blog/${blog.slug}`}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-8 hover:scale-105 transition-transform"
        >
            <li className="list-none text-base text-gray-300 font-medium">
                {blog.title}
            </li>

            <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{blog.date}</span>
                <LucideArrowUpRight width={16} />
            </div>
        </Link>
    );
}
