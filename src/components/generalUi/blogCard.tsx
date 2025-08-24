import { BlogPost } from '@/types/types';
import React from 'react';
import Link from 'next/link';
import { LucideArrowUpRight } from 'lucide-react';

export default function BlogCard({ blog }: any) {
    return (
        <Link
            href={`/blog/${blog.slug}`}
            className="mb-4 group flex justify-between items-center overflow-hidden "
        >
            <h4 className="font-semibold text-m group-hover:text-blue-400 transition-colors leading-tight">
                {blog.title}
            </h4>

            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-blue-400 transition-colors">
                <span>{blog.date}</span>
                <LucideArrowUpRight width={16} />
            </div>
        </Link>
    );
}
