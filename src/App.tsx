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
      <div className="top-0 h-[50vh] p-4 pt-12 md:sticky md:h-[75vh] md:pt-4">
        <WelcomePane />
      </div>
      
      {/* Right Half */}
      <div className="space-y-20 p-4">

        <WhoAmI />
        
        <Projects />

        <Resume />

        <Footer />

      </div>
    </div>
    </>
  );
}

export default App;

