import Footer from "./Footer.tsx";
import WelcomePane from "./WelcomePane.tsx";
import Projects from "./Projects.tsx";
import Resume from "./Resume.tsx";

/**
 * Contains the main code for the site, split up into components.
 *
 */
function App() {
  return (<>
    <div className="grid w-screen grid-cols-2 gap-4 bg-gray-800">
      <div className="sticky top-0 h-screen p-4">
        <WelcomePane />

      </div>
      <div className="p-4">
        <div className="m-20" />
        <p id="Introduction" className=" mb-8 max-w-xl text-lg text-gray-700 dark:text-gray-300">
          I’m a <strong>Frontend Developer</strong> who sees software as both logic and art, passionate about creating interfaces that feel as good as they look. My favorite work happens where design and development meet, building digital experiences that are <strong>intuitive</strong>, <strong>engaging</strong>, and <strong>built to perform at scale</strong>.

          <br /><br />Currently, I’m a <strong>Web Designer at Commercial Funding Partners</strong>, where I design, manage, and optimize lending websites through thoughtful UI/UX, SEO strategy, and lead-generation tools. I'm also on an <strong>App Development team</strong> maintaining/building a Flutter app with a <strong>100k+ user base</strong>.

          <br /><br />In the past, I’ve worked as an <strong>Analytics Engineer at Health Catalyst</strong>, where I led dashboard development and honed my data analysis skills, and as a <strong>Data Analyst at Cambi Solutions</strong>, collaborating with an app dev team to improve user experience. These roles gave me a strong foundation in adaptability, collaboration, and fast learning.

          <br /><br />If I'm not working, I'm flying down MTB trails on my Onewheel, enjoying a delicious pour-over, or doing something outdoorsy with my partner and our friends!
        </p>
        {/* Divide sections */}
        <div className="m-20" />
        <Projects />

        {/* Divide sections */}
        <div className="m-20" />

        <Resume />

        {/* Divide sections */}
        <div className="m-20" />

        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
