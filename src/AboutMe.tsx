import { Card } from "flowbite-react";

/**
 * Contains information about me, including my name,
 * title, and a brief description of myself.
 * @returns the About Me page
 */
export default function AboutMe() {
  return (
    <main className=" flex h-auto items-center justify-center p-5 ">
      {/* Rounded box around elements. */}
      <div className="rounded-lg bg-slate-700 p-10 text-center shadow-md">
        {/* Title */}
        <h1 className="text-center text-4xl font-bold tracking-tight dark:text-slate-50">
          About Me
        </h1>

        {/* Divider */}
        <div className="mt-4" />
        <hr className="m-8" />

        {/* Description card */}
        <Card
          className="max-w-md"
          imgAlt="An image of Eli Parker"
          imgSrc={`${import.meta.env.BASE_URL}Portfolio-Image.JPEG`}
          horizontal
        >
          <h5 className="mb-0 text-2xl font-bold tracking-tight text-slate-50 dark:text-slate-50">
            Eli Parker - Software Engineer
          </h5>
          <hr className="mx-2" />
          <p className="font-normal text-gray-700 dark:text-slate-50">
            I'm a passionate developer and software engineer, with a love for{" "}
            <strong>learning</strong> and <strong>problem solving</strong>. I'm
            a <strong>team player</strong>, and I'm always looking for new ways
            to improve my skills and help others. I'm currently studying{" "}
            <strong>Computer Science at the University of Utah</strong>, and I'm
            excited to see where my career takes me. I'm always looking for new
            opportunities to <strong>grow</strong> and <strong>learn</strong>,
            and I'm excited to see what the future holds!
          </p>
        </Card>
      </div>
    </main>
  );
}
