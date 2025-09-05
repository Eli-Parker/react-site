import { IoLogoGithub } from "react-icons/io5";

/**
 * Contains the footer
 *
 * @returns footer components
 */
function Footer() {
  return (
    <>
      <main className=" h-auto items-start justify-start">
        
        <p className="font-medium dark:text-slate-300">
          Designed and built by <br /> <strong>Eli Parker</strong>
        </p>
        <div className="my-2" />
        <a
          href="https://github.com/Eli-Parker/react-site/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-3xl text-gray-500 transition-colors hover:text-sky-400"
        >
          <IoLogoGithub />
        </a>
        <div className="m-20" />

          
      </main>
    </>
  );
}

export default Footer;
