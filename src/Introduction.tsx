import { TypeAnimation } from "react-type-animation";
import { Button } from "flowbite-react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

/**
 * Contains the introduction, including my name,
 * title, and a slick animation with changing text!
 *
 * @returns the introduction component
 */
export default function Introduction() {
  // Color for type text animation
  const animTextColor = "skyblue";

  // Titles for the type animation
  const titles = [
    " a Developer",
    2000,
    " a Fast Learner",
    2000,
    " a Team Player",
    2000,
    " a Software Engineer",
    2000,
    " a C# Developer",
    2000,
    " Sociable",
    2000,
    " Adept",
    2000,
    " a Problem Solver",
    2000,
    " a Programmer",
    2000,
    " a Web Developer",
    2000,
    " a Software Developer",
    2000,
    " Organized",
    2000,
    " a Full Stack Developer",
    2000,
    " a Battery Builder",
    2000,
    " a Front End Developer",
    2000,
    " a Back End Developer",
    2000,
    " a UI/UX Designer",
    2000,
  ];

  // Return component
  return (
    <div className="flex h-[80vh] w-full items-center justify-center text-center">
      <div className="text-center">
        {/* Title and Type animation */}
        <div className="text-4xl font-bold">
          <h2 className="dark:text-slate-50">
            Eli Parker is
            <TypeAnimation
              sequence={titles}
              wrapper="span"
              speed={60}
              style={{ color: animTextColor }}
              repeat={Infinity}
            />
          </h2>
        </div>

        <hr className="m-8" />

        {/* Social Media Links */}
        <Button.Group>
          <Button
            color="gray"
            onMouseDown={(e: { button: number }) => {
              if (e.button === 0 || e.button === 1)
                window.open("https://github.com/Eli-Parker");
            }}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <IoLogoGithub className="m-1" />
            GitHub
          </Button>
          <Button
            color="gray"
            onMouseDown={(e: { button: number }) => {
              if (e.button === 0 || e.button === 1)
                window.open(
                  "https://www.linkedin.com/in/eli-parker-a96338302/",
                );
            }}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <IoLogoLinkedin className="m-1" />
            LinkedIn
          </Button>
          <Button
            color="gray"
            onMouseDown={(e: { button: number }) => {
              if (e.button === 0 || e.button === 1)
                window.open("mailto:me@eliparker.dev");
            }}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <IoMail className="m-1" />
            Email
          </Button>
        </Button.Group>
      </div>
    </div>
  );
}
