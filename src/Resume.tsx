/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-custom-classname */
import experience from "./data/experience.json"

type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

/**
 * Houses all my work experience in one page
 * @returns the work experience/resume section of the site
 */
export default function Resume() {

  return (
    <main id="resume" className="h-auto items-start justify-start">
      {/* Title */}
      <h1 className="section-title">Resume</h1>
      {/* Divider */}
      <hr className="section-divider" />

        {/* Experience cards column */}
        <div className="flex w-full flex-col space-y-8">
          {experience.experience.map(
            (
              exp: Experience,
              idx: number,
            ) => (
              <div key={idx} className={`flex items-start`}>
                {/* Card */}
                <div className="interactive-card py-2">
                  {/* Company */}
                  <h5 className="text-2xl font-bold tracking-tight text-slate-50" style={{ lineHeight: "1.5rem" }}>
                  {exp.company}
                  </h5>

                  {/* Job Title/Position and Company */}
                  <div className="flex items-baseline gap-2 align-middle">
                  <p className="text-slate-300">{exp.position}</p>
                  <span className="mx-1 text-slate-400">|</span>
                  {/* Date Range */}
                  <span className="text-xs text-slate-300">
                  {getFormattedDate(exp.startDate)} - {new Date(exp.endDate).getFullYear() > 3000 ? "Present" : getFormattedDate(exp.endDate)}
                  </span>
                  </div>


                  {/* Bullet Points*/}
                  <p className="font-normal text-slate-50">
                  {exp.responsibilities.map((line, i) => (
                    <span key={i}>
                    • {line}
                    <br />
                    </span>
                  ))}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      <p className="pt-3 font-medium dark:text-slate-300">
        Want my full Resume? <br /> Get it <a className="link-accent" href="./resume.pdf">here</a>
      </p>
    </main>
  );
}

/**
 * Formats a given numerical date to the format "MMM YYYY"
 * @param date the date formatted in a way JS Date class can parse
 * @returns A string formatted as MMM YYYY (e.g. Jan 2025)
 */
function getFormattedDate(date: string) {
  const dateObj = new Date(date);

  const month = dateObj.toLocaleString("en-US", { month: "short" }).charAt(0).toUpperCase() +
    dateObj.toLocaleString("en-US", { month: "short" }).slice(1);

  const year = dateObj.getFullYear();

  return month + " " + year;
}
