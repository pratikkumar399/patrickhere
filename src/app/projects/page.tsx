import { LucideArrowRight } from 'lucide-react';
import React from 'react'

const ProjectsData = [
    {
        title: "Project One",
        description: "This is a description of project one.",
        link: "https://example.com/project-one"
    },
    {
        title: "Project Two",
        description: "This is a description of project two.",
        link: "https://example.com/project-two"
    },
    {
        title: "Project Three",
        description: "This is a description of project three.",
        link: "https://example.com/project-three"
    }
];

const Projects = () => {
    return (
        <div className='flex flex-col mt-10'>
            <h1 className="text-xl">My projects</h1>

            <p className='text-gray-400'>Currently working on some projects, will update soon.</p>

            <div className='mt-4'>
                {ProjectsData.map((project, index) => (
                    <div key={index} className='flex gap-4 mb-4 '>
                        <LucideArrowRight width={20} />
                        <h2 className='text-lg font-semibold'>{project.title}</h2>
                        <p className='text-gray-500'>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects; 