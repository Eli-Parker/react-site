import { useEffect, useState } from "react";

export default function Resume() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
      console.log("this method got called!");
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
        <iframe
          src="https://drive.google.com/file/d/1CiainGQ_i1Dsw0jk-a8s0qUreULugdIo/preview"
          width={isSmallScreen ? 400 : 600}
          height={isSmallScreen ? 400 : 600}
        />
      </div>
    </main>
  );
}
