import { Key } from "react";
import projects from "./data/projects.json";
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

        {/* Map on all the projects in the projects.json */}
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
              <Card
            key={index}
            className={`m-6 max-w-sm ${
                // If there's an odd number of projects, make the last card span 2 columns
              projects.projects.length % 2 !== 0 && index === projects.projects.length - 1
                ? "sm:col-span-2 sm:mx-auto"
                : ""
            }`}
              >
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

              {/* Github (only display if there's a github) */}
              {project.github != "" && (
              <Button
                onMouseDown={(e: { button: number }) => {
                    if (e.button === 0 || e.button === 1)
                      window.open(project.github);
                      }}
                outline
              >
                See on GitHub
              </Button>
              )}
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
