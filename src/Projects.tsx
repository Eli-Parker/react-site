/* eslint-disable tailwindcss/no-custom-classname */
import { Key } from "react";
import projects from "./data/projects.json";
import { IoLogoGithub } from "react-icons/io5";

/**
 * The projects section of the website, which imports all the projects from the projects.json file.
 *
 * @returns a set of project cards with all the projects in it
 */
function Projects() {
  return (
    <main id="projects" className="h-auto items-start justify-start ">
        {/* Title */}
        <h1 className="text-left text-3xl font-bold text-slate-50">
          Projects
        </h1>

        {/* Divider */}
        <hr className="mb-8 mt-4 w-1/4 text-left" />

        {/* Map on all the projects in the projects.json */}
          {projects.projects.map(
            (
              project: {
                name: string;
                description: string;
                siteReference: string;
                github: string;
                chiclets: string[];
              },
              index: Key,
            ) => (
            <div
              key={index}
              // eslint-disable-next-line tailwindcss/no-custom-classname, tailwindcss/migration-from-tailwind-2
              className="group relative my-6 max-w-sm cursor-pointer rounded-[8px] bg-gray-500 bg-opacity-0 pl-0 transition-all duration-300 hover:max-w-[calc(24rem+12px)] hover:bg-opacity-20 hover:px-2"
              onClick={() => {
              if (project.siteReference) {
                window.open(project.siteReference, "_blank");
              }
              }}
            >
            {/* Arrow Icon */}
            { project.siteReference && <span className="opacity/0 group-hover:opacity/100 absolute right-2.5 top-2.5 -translate-y-0 translate-x-0 text-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
              {/* SVG arrow or Unicode arrow */}
              <svg width="20" height="20" fill="none" stroke="#f8fafc" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span> }
            
            <div className="py-0.5" />

            {/* Card title */}
            <h5 className="text-2xl font-bold tracking-tight dark:text-slate-50">
              {project.name}
            </h5>

            {/* Card description */}
            <p className="font-normal dark:text-slate-50">

                {/* Add a line break anywhere there's \n in the text */}
                {project.description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
                ))}
            </p>

            {/* Chiclets and Github ref in a row */}
            <div className="my-2 flex items-center">
              {/* Chiclets: take up 90% */}
              <div className="flex grow flex-wrap gap-2" style={{ flexBasis: "90%" }}>
                {Array.isArray(project.chiclets) && project.chiclets.length > 0 &&
                  project.chiclets.map((chiclet: string, i: number) => (
                    <span
                      key={i}
                      className="rounded-full bg-sky-900/70 px-3 py-1 text-xs font-semibold text-slate-100 shadow-sm"
                    >
                      {chiclet}
                    </span>
                  ))}
              </div>
              {/* Github ref: take up 10% */}
              <div className="flex shrink-0 justify-end pr-3" style={{ flexBasis: "10%" }}>
                {project.github && <a
                  onClick={e => {
                    e.stopPropagation();
                    if (project.github) {
                      window.open(project.github, "_blank");
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-3xl text-gray-500 transition-colors hover:text-sky-400"
                >
                  <IoLogoGithub />
                </a>}
              </div>
            </div>
            <div className="py-0.5" />
            </div>
            ),
          )}
    </main>
  );
}

export default Projects;
