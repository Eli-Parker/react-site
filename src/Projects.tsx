import { Key } from "react";
import projects from "../public/projects.json";
import { Button, Card } from "flowbite-react";

/**
 * The projects section of the website, which imports all the projects from the projects.json file.
 *
 * @returns a set of project cards with all the projects in it
 */
function Projects() {
  return (
    <main className=" flex h-auto items-center justify-center p-5 ">
      {/* Rounded box around elements. */}
      <div className="rounded-lg bg-slate-700 p-10 text-center shadow-md">
        {/* Title */}
        <h1 className="text-center text-4xl font-bold tracking-tight dark:text-slate-50">
          Projects
        </h1>

        {/* Divider */}
        <div className="mt-4" />
        <hr className="m-8" />

        {/* Projects Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.projects.map(
            (
              project: {
                name: string;
                description: string;
                siteReference: string;
                github: string;
              },
              index: Key,
            ) => (
              <Card key={index} className="m-6 max-w-sm">
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
                    <Button
                      onMouseDown={(e: { button: number }) => {
                        if (e.button === 0 || e.button === 1)
                          window.open(project.siteReference);
                      }}
                      outline
                      gradientDuoTone="pinkToOrange"
                    >
                      Go to Project
                    </Button>
                  )}
                  <Button
                    href={project.github}
                    className="
                            focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600
                          dark:bg-gray-800 dark:text-slate-50 dark:hover:border-gray-700 dark:hover:bg-gray-700
                          dark:focus:ring-gray-700"
                  >
                    See on GitHub
                  </Button>
                </div>
              </Card>
            ),
          )}
        </div>
      </div>
    </main>
  );
}

export default Projects;
