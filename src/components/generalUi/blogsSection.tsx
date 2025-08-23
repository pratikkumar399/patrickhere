"use client"
import React from 'react'
import { blogPosts } from '@/lib/blogData'
import Link from 'next/link'
import { LucideArrowUpRight, LucideBookOpen, LucideCode, LucideDatabase, LucideGraduationCap, LucideExternalLink } from 'lucide-react'
import { SkillBadges } from './skillBadges';


const getBlogCategory = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('interview') || lowerTitle.includes('experience')) {
        return { category: 'Interview', icon: LucideGraduationCap, color: 'text-green-400' };
    } else if (lowerTitle.includes('javascript') || lowerTitle.includes('react') || lowerTitle.includes('redux')) {
        return { category: 'Frontend', icon: LucideCode, color: 'text-blue-400' };
    } else if (lowerTitle.includes('docker') || lowerTitle.includes('backend')) {
        return { category: 'DevOps', icon: LucideDatabase, color: 'text-purple-400' };
    } else if (lowerTitle.includes('algorithm') || lowerTitle.includes('sort') || lowerTitle.includes('stl')) {
        return { category: 'Algorithms', icon: LucideCode, color: 'text-orange-400' };
    } else {
        return { category: 'Technical', icon: LucideBookOpen, color: 'text-blue-400' };
    }
};

const BlogsSection = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Skills Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    skills
                </h2>
                <SkillBadges />
            </div>

            {/* Blog Articles Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    technical articles
                </h2>
                <p className="text-gray-400 text-m mb-8">
                    Sharing knowledge through technical writing on various development topics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {blogPosts?.slice(0, 4).map((blog, index) => {
                        const { category, icon: IconComponent, color } = getBlogCategory(blog.title);
                        return (
                            <Link
                                key={index}
                                href={blog.link}
                                target="_blank"
                                className="group relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#333] hover:bg-[#111] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 block"
                            >
                                {/* Header with Icon and Category */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-[#1a1a1a] rounded-lg group-hover:bg-[#2a2a2a] transition-colors">
                                            <IconComponent className={`w-5 h-5 ${color}`} />
                                        </div>
                                        <span className="text-xs font-medium text-gray-500 bg-[#1a1a1a] px-2 py-1 rounded-full">
                                            {category}
                                        </span>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-[#2a2a2a] rounded-lg">
                                        <LucideExternalLink className="w-4 h-4 text-gray-400 hover:text-white" />
                                    </div>
                                </div>

                                {/* Title and Date */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-m mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                                        {blog.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        {blog.date}
                                    </p>
                                </div>

                                {/* Read More Indicator */}
                                <div className="flex items-center text-sm text-gray-400 group-hover:text-blue-400 transition-colors">
                                    <span className="mr-2">Read article</span>
                                    <LucideArrowUpRight className="w-4 h-4" />
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </Link>
                        );
                    })}
                </div>

                {/* View All Articles Link */}
                <div className="text-center">
                    <Link
                        href="https://medium.com/@raipratik399"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                        View all articles
                        <LucideArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8 mb-8">
                <Link
                    href="https://x.com/twtsof_Pratik"
                    target="_blank"
                    className="group flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl hover:border-[#333] hover:bg-[#111] transition-all duration-300"
                >
                    <span className="text-gray-300 group-hover:text-white transition-colors">Twitter</span>
                    <LucideExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </Link>
                <Link
                    href="https://github.com/pratikkumar399"
                    target="_blank"
                    className="group flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl hover:border-[#333] hover:bg-[#111] transition-all duration-300"
                >
                    <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
                    <LucideExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </Link>
            </div>

            {/* Footer */}
            <div className="flex justify-center py-8">
                <p className="text-gray-400">
                    Made with 💓 by Pratik Rai
                </p>
            </div>
        </div>
    )
}

export default BlogsSection;