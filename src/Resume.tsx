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
    <main className=" h-auto items-start justify-start ">
        {/* Title */}
        <h1 className="text-left text-3xl font-bold text-slate-50">
          Resume
        </h1>

        {/* Divider */}
        <hr className="my-4 w-1/4 text-left" />

        {/* Resume File */}
        <embed
          src={`${import.meta.env.BASE_URL}resume.pdf`}
          width={isSmallScreen ? 320 : 600}
          height={isSmallScreen ? 320 : 600}
          className='bg-white'
        />
    </main>
  );
}
