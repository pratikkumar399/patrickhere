import { LucideArrowRight, LucideArrowUpRight } from 'lucide-react';
import React from 'react'

const ProjectsData = [
    {
        title: "bloggerszone",
        description: "Full‑stack blogging website",
        link: "https://github.com/pratikkumar399/bloggerszone"
    },
    {
        title: "backendsubscription",
        description: "Backend APIs for Netflix‑style subscription service",
        link: "https://github.com/pratikkumar399/backendsubscription"
    },
    {
        title: "filesgenerator",
        description: "VS Code extension to generate Next.js components",
        link: "https://github.com/pratikkumar399/filesgenerator"
    },
    {
        title: "journal-app",
        description: "APIs for a journaling application",
        link: "https://github.com/pratikkumar399/journal-app"
    },
    {
        title: "tasksapi",
        description: "Task scheduler API",
        link: "https://github.com/pratikkumar399/tasksapi"
    },
    {
        title: "frontend_tasks",
        description: "A repo containing various complex frontend tasks",
        link: "https://github.com/pratikkumar399/frontend_tasks"
    }
];

const Projects = () => {
    return (
        <div className=" text-white p-6 mt-10 rounded-xl max-w-4xl">
            <h2 className="text-2xl font-bold mb-2 underline">projects</h2>
            <p className="text-gray-400 mb-6">
                Currently working on some projects, will update soon.
            </p>

            <div className="space-y-4">
                {ProjectsData.map((project) => (
                    <div
                        key={project.title}
                        className="group flex justify-between items-center p-4 bg-[#1a1a1a] rounded-md hover:bg-[#242424] transition-colors"
                    >
                        <div>
                            <h3 className="font-semibold text-lg group-hover:text-blue-400 transition">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-400">{project.description}</p>
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 flex hover:underline text-sm font-medium"
                        >
                            View
                            <LucideArrowUpRight className="inline ml-1" width={16} />
                        </a>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Projects; 