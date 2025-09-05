

export default function Resume() {


  return (
    <main className="h-auto items-start justify-start">
      {/* Title */}
      <h1 className="text-left text-3xl font-bold text-slate-50">
      Resume
      </h1>

      {/* Divider */}
      <hr className="my-4 w-1/4 text-left" />

      {/* Responsive Aspect Ratio Container */}
      <div
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
      </div>
    </main>
  );
}
