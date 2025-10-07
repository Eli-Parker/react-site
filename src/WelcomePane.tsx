import { TypeAnimation } from "react-type-animation";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

/**
 * Contains the introduction, including my name,
 * title, and a slick animation with changing text!
 *
 * @returns the introduction component
 */
export default function WelcomePane() {
  // Color now supplied via global variable / inherited text color
  const animTextColor = "var(--color-text-primary)";

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


  return (
    <div className="flex h-[60vh] w-full items-center md:h-[80vh] md:justify-center" >
      <div className="justify-start text-left">
        {/* Title and Type animation */}
        <div className="flex w-[45%] min-w-52" >
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
            <div className="flex w-1/5 min-w-16 items-end justify-end">
              <img
              src="favicon.svg"
              alt="Logo"
              width={64}
              height={64}
              className="mb-1 mt-auto"
              />
            </div>
        </div>

        <div className="spacer-sm" />

        {/* Quick About me section */}
  <div className="body-text mb-8 w-1/2 min-w-72 max-w-xl">
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
            className="icon-link"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/eli-parker-a96338302/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-link"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="mailto:me@eliparker.dev"
            aria-label="Email"
            className="icon-link"
          >
            <IoMail />
          </a>
        </div>
      </div>
    </div>
  );
}
