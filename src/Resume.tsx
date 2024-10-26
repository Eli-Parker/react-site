import { useEffect, useState } from "react";

export default function Resume() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className=" flex h-auto items-center justify-center p-5 ">
      {/* Rounded box around elements. */}
      <div className="rounded-lg bg-slate-700 p-10 text-center shadow-md">
        {/* Title */}
        <h1 className="text-center text-4xl font-bold tracking-tight dark:text-slate-50">
          My Resume
        </h1>

        {/* Divider */}
        <div className="mt-4" />
        <hr className="m-8" />

        {/* Resume File */}
        <embed
          src={`${import.meta.env.BASE_URL}resume.pdf`}
          width={isSmallScreen ? 320 : 600}
          height={isSmallScreen ? 320 : 600}
          className='bg-white'
        />
      </div>
    </main>
  );
}
