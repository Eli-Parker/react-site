import { Key } from 'react';
import projects from './Data/projects.json';
import { Card } from 'flowbite-react';


/**
 * The projects section of the website, which imports all the projects from the projects.json file.
 * 
 * @returns a set of project cards with all the projects in it
 */
function Projects() 
{
      

    return (
    <main className=' flex h-auto items-center justify-center p-5 '>
        
    {/* Rounded box around elements. */}
    <div className='rounded-lg bg-slate-700 p-10 text-center shadow-md'>

        {/* Title */}
        <h1 className="text-center text-4xl font-bold tracking-tight dark:text-slate-50">
            Projects
        </h1>

        {/* Divider */}
        <div className="mt-4" />
        <hr className='m-8' />
        
        {/* Projects Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        
        {projects.projects.map((project: { name: string; description: string; siteReference: string; github: string; }, index: Key) => (
            <Card key={index} href="#" className="m-6 max-w-sm">
                {/* Card title */}
                <h5 className="text-2xl font-bold tracking-tight dark:text-slate-50">
                    {project.name}
                </h5>

                {/* Card description */}
                <p className="font-normal dark:text-slate-50">
                    {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex justify-center space-x-3 lg:mt-6">

                    {/* Site Reference (only display if there's a reference) */}
                    {project.siteReference != "" && (
                        <a
                            href={project.siteReference}
                            className="
                                inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium
                                text-slate-50 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300
                                dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Go to Project
                        </a>
                    )}
                    <a
                        href={project.github}
                        className="
                            inline-flex items-center rounded-lg border border-gray-300 bg-white
                            px-4 py-2 text-center text-sm font-medium text-slate-50 hover:bg-gray-100
                            focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600
                          dark:bg-gray-800 dark:text-slate-50 dark:hover:border-gray-700 dark:hover:bg-gray-700
                          dark:focus:ring-gray-700"
                    >
                        See on GitHub
                    </a>
                </div>
            </Card>
        ))}
        </div>

    </div>
    </main>
    );
};

export default Projects;