import Footer from "./Footer.tsx";
import WelcomePane from "./WelcomePane.tsx";
import Projects from "./Projects.tsx";
import Resume from "./Resume.tsx";
import WhoAmI from "./WhoAmI.tsx";

/**
 * Contains the main code for the site, split up into components.
 *
 */
function App() {
  return (<>
    <div className="grid grid-cols-1 gap-4 bg-gray-800 md:grid-cols-2">

      {/* Left half */}
      <div className="top-0 h-[75vh] p-4 md:sticky md:h-screen">
        <WelcomePane />
      </div>
      
      {/* Right Half */}
      <div className="p-4">

        <div className="m-20" />
        <WhoAmI />
        
        <div className="m-20" />
        <Projects />

        <div className="m-20" />
        <Resume />

        <div className="m-20" />
        <Footer />

      </div>
    </div>
    </>
  );
}

export default App;

