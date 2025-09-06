import { TypeAnimation } from "react-type-animation";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

/**
 * Contains the introduction, including my name,
 * title, and a slick animation with changing text!
 *
 * @returns the introduction component
 */
export default function WelcomePane() {
  // Color for type text animation
  const animTextColor = "#f8fafc";

  // Titles for the type animation
  const titles = [
    "UI/UX Designer",
    4000,
    "Frontend Developer",
    4000,
    "Software Engineer",
    4000,
    "App Developer",
    4000,
  ];

  // Return component
  return (
    <div className="flex h-[80vh] w-full items-center justify-center text-center">
      <div className="justify-start text-left">
        {/* Title and Type animation */}
        <div className="flex" style={{ width: "45%" }} >
          {/* Left column: Text (80%) */}
          <div className="w-4/5 font-bold">
            <h2 className="text-4xl text-slate-50">
              Eli Parker
            </h2>
            <h4 className="text-slate-50">
              <TypeAnimation
                sequence={titles}
                wrapper="span"
                speed={60}
                style={{ color: animTextColor }}
                repeat={Infinity}
              />
            </h4>
          </div>
          {/* Right column: SVG (20%) */}
            <div className="flex w-1/5 items-end justify-end">
              <img
              src="favicon.svg"
              alt="Logo"
              width={80}
              height={80}
              className="mb-1 mt-auto"
              />
            </div>
        </div>

        <div className="m-4" />

        {/* Quick About me section */}
        <div className=" mb-8 w-1/2 max-w-xl text-lg text-gray-700 dark:text-gray-300">
          <p>
            I’m a frontend developer and CS student who turns big ideas into beautiful, high-performing digital experiences.
          </p>
        </div>
        {/* Social Media Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Eli-Parker"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-3xl text-gray-500 transition-colors hover:text-sky-400"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/eli-parker-a96338302/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-3xl text-gray-500 transition-colors hover:text-sky-400"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="mailto:me@eliparker.dev"
            aria-label="Email"
            className="text-3xl text-gray-500 transition-colors hover:text-sky-400"
          >
            <IoMail />
          </a>
        </div>
      </div>
    </div>
  );
}
