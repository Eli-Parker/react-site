/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import experience from "./data/experience.json"

type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

/**
 * Gets the month index of a given date
 * @param date the date which the month is grabbed from
 * @param monthsArray The array the month is compared to
 * @returns A number which is the array index in the months array for the given date. 
 * Note that extraneous values will be assigned to the lowest or highest valid index
 */
function getMonthIndex(date: Date, monthsArray: Date[]) {
  const idx = monthsArray.findIndex(
    m => m.getFullYear() === date.getFullYear() && m.getMonth() === date.getMonth()
  );
  if (idx !== -1) return idx;
  if (date < monthsArray[0]) return 0;
  if (date > monthsArray[monthsArray.length - 1]) return monthsArray.length - 1;
  return 0;
}

/**
 * Makes an array of months given a start and end date
 * @param start the start date
 * @param end the end date
 * @returns An array of dates from the first date to the last date
 */
function getMonthArray(start: Date, end: Date): Date[] {

  // End date shouldn't be more than present day
  if (end.getTime() > Date.now()) {
    end = new Date(Date.now());
  }

  const months = [];
  const date = new Date(start);
  date.setDate(1);
  while (date <= end) {
    months.push(new Date(date));
    date.setMonth(date.getMonth() + 1);
  }
  return months;
}

/**
 * Houses all my work experience in one page
 * @returns the work experience/resume section of the site
 */
export default function Resume() {

    // Get the months array
    const allStartDates = experience.experience.map(e => new Date(e.startDate));
    const allEndDates = experience.experience.map(e => new Date(e.endDate));
    const minDate = new Date(Math.min(...allStartDates.map(d => d.getTime())));
    const maxDate = new Date(Math.max(...allEndDates.map(d => d.getTime())));
    const monthsArray = getMonthArray(minDate, maxDate);

  /// Track which job is being hovered
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const expStartIdx = hoveredIdx !== null ? getMonthIndex(allStartDates[hoveredIdx], monthsArray) : 0;
  const expEndIdx = hoveredIdx !== null ? getMonthIndex(allEndDates[hoveredIdx], monthsArray) : 0;
  return (
    <main id="resume" className="h-auto items-start justify-start">
      {/* Title */}
      <h1 className="section-title">Resume</h1>
      {/* Divider */}
      <hr className="section-divider" />

      {/* Div to house the 2 cols */}
      <div className="flex w-full items-stretch gap-8">
        {/* Timeline column */}
        <div className="relative flex w-[8%] flex-col items-end">
          <div className="flex h-full flex-col">
            <div
              className="rounded-s-full bg-transparent px-1 py-[2px] text-end text-xs font-semibold text-slate-100 shadow-sm"
            >
              HS Grad
            </div>

            {/* Map for timeline */}
            {monthsArray.map((month, idx) => {
              const highlighted = ( // Be highlighted IF
                   hoveredIdx !== null // There is hover
                && idx >= expStartIdx // We're at/past start
                && idx <= expEndIdx // We're before/at end
                && expStartIdx !== expEndIdx); // AND there is hover (unselected state)
              return (
              <div
                key={idx + "" + month.toDateString()}
                className="flex size-full items-end"
              >
                {/* Timeline Text */}
                <span
                  className="timeline-pill transform"
                  style={{
                    ...((highlighted && (idx === expStartIdx || idx === expEndIdx))
                      ? { opacity: 1, transform: "translateX(-2px)" }
                      : { opacity: 0, transform: "translateX(-16px)" }),
                  }}
                >
                  {(() => {
                    // Subtract one month from current date
                    const now = new Date();
                    now.setMonth(now.getMonth() - 1);
                    return month.getTime() >= now.getTime()
                      ? "Present"
                      : month.toLocaleString("en-US", { month: "short", year: "numeric" });
                  })()}
                </span>

                {/* Line segment */}
                <div
                  className={`h-[21px] ${highlighted ? 'w-[4px] bg-sky-400' : 'w-[2px] bg-[#e5e7eb]'} ${(idx === expStartIdx) ? 'rounded-tl-sm': ''} ${(idx === expEndIdx) ? 'rounded-bl-sm': ''} w-[10%] transition-all duration-100 ease-in-out`}
                />
              </div>
            )})}
            <div
              className="rounded-s-full bg-transparent px-1 py-[2px] text-end text-xs font-semibold text-slate-100 shadow-sm"
            >
            Present
            </div>
          </div>
        </div>
        {/* Experience cards column */}
        <div className="flex w-[93%] flex-col">
          {experience.experience.map(
            (
              exp: Experience,
              idx: number,
            ) => (
              <div key={idx} className={`${(idx === experience.experience.length - 1) ? '' : 'mb-16'} flex items-start`}>
                {/* Card */}
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => {
                  setTimeout(() => {
                    setHoveredIdx(prev => (prev === idx ? null : prev));
                  }, 100);
                  }}
                  onTouchStart={() => setHoveredIdx(idx)}
                  onTouchEnd={() => {
                  setTimeout(() => {
                    setHoveredIdx(prev => (prev === idx ? null : prev));
                  }, 100);
                  }}
                  className="interactive-card"
                >
                  <div className="py-0.5" />
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
                  <div className="py-0.5" />
                </div>
              </div>
            ),
          )}
          {/* Resume FILE */}
          {/* <div
            style={{
              position: "relative",
              width: "auto",
              maxWidth: "500px",
              aspectRatio: "8.5 / 11",
              background: "white",
              overflow: "hidden",
            }}
          >
            <embed
              src={`${import.meta.env.BASE_URL}resume.pdf`}
              type="application/pdf"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              className="bg-white"
            />
          </div> */}
        </div>
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
