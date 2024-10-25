import AboutMe from "./AboutMe.tsx";
import Footer from "./Footer.tsx";
import Introduction from "./Introduction.tsx";
import Projects from "./Projects.tsx";
import Resume from "./Resume.tsx";

/**
 * Contains the main code for the site, split up into components.
 *
 */
function App() {
  return (
    <div className="w-screen dark:bg-gray-800">
      <Introduction />

      <Projects />

      {/* Divide sections */}
      <div className="m-20" />

      <Resume />

      {/* Divide sections */}
      <div className="m-20" />

      <AboutMe />

      {/* Divide sections */}
      <div className="m-20" />

      <Footer />
    </div>
  );
}

export default App;
