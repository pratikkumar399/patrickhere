import { LucideArrowRight, LucideArrowUpRight, LucideGithub, LucideCode, LucideDatabase, LucideGlobe, LucideExternalLink } from 'lucide-react';
import React from 'react'

const ProjectsData = [
    {
        title: "bloggerszone",
        description: "Full‑stack blogging website with user authentication and rich content management",
        link: "https://github.com/pratikkumar399/bloggerszone",
        type: "Full-Stack",
        tech: ["React", "Node.js", "MongoDB"],
        icon: LucideGlobe
    },
    {
        title: "backendsubscription",
        description: "Backend APIs for Netflix‑style subscription service with payment integration",
        link: "https://github.com/pratikkumar399/backendsubscription",
        type: "Backend",
        tech: ["Node.js", "Express", "APIs"],
        icon: LucideDatabase
    },
    {
        title: "filesgenerator",
        description: "VS Code extension to generate Next.js components with custom templates",
        link: "https://github.com/pratikkumar399/filesgenerator",
        type: "Extension",
        tech: ["TypeScript", "VS Code", "Next.js"],
        icon: LucideCode
    },
    {
        title: "journal-app",
        description: "APIs for a journaling application with mood tracking and analytics",
        link: "https://github.com/pratikkumar399/journal-app",
        type: "Backend",
        tech: ["Node.js", "Express", "APIs"],
        icon: LucideDatabase
    },
    {
        title: "tasksapi",
        description: "Task scheduler API with cron jobs and notification system",
        link: "https://github.com/pratikkumar399/tasksapi",
        type: "Backend",
        tech: ["Node.js", "Scheduler", "APIs"],
        icon: LucideDatabase
    },
    {
        title: "frontend_tasks",
        description: "A collection of complex frontend challenges and interactive components",
        link: "https://github.com/pratikkumar399/frontend_tasks",
        type: "Frontend",
        tech: ["React", "JavaScript", "CSS"],
        icon: LucideCode
    }
];

const Projects = () => {
    return (
        <div className="text-white  mt-10 max-w-6xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    projects
                </h2>
                <p className="text-gray-400 text-lg">
                    A collection of projects I've built, ranging from full-stack applications to developer tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ProjectsData.map((project) => {
                    const IconComponent = project.icon;
                    return (
                        <div
                            key={project.title}
                            className="group relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#333] hover:bg-[#111] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-[#1a1a1a] rounded-lg group-hover:bg-[#2a2a2a] transition-colors">
                                        <IconComponent className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className="text-xs font-medium text-gray-500 bg-[#1a1a1a] px-2 py-1 rounded-full">
                                        {project.type}
                                    </span>
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-[#2a2a2a] rounded-lg"
                                >
                                    <LucideExternalLink className="w-4 h-4 text-gray-400 hover:text-white" />
                                </a>
                            </div>


                            <div className="mb-4">
                                <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-300 rounded-md border border-[#2a2a2a] group-hover:border-[#3a3a3a] transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Projects;