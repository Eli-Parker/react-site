/**
 * Contains the info about me!
 * @returns the section that explains who I am and what I do
 */
export default function WhoAmI() {
  return <main id="whoami">
    {/* Title */}
    <h1 className="text-left text-3xl font-bold text-slate-50">
      Who I Am
    </h1>

    {/* Divider */}
    <hr className="my-4 w-1/4 text-left" />
    <p id="Introduction" className=" mb-8 max-w-xl text-lg text-gray-700 dark:text-gray-300">
      I’m a <strong>Frontend Developer</strong> who sees software as both logic and art, passionate about creating interfaces that feel as good as they look. My favorite work happens where design and development meet, building digital experiences that are <strong>intuitive</strong>, <strong>engaging</strong>, and <strong>built to perform at scale</strong>.

      <br /><br />Currently, I’m a <strong>Web Designer at Commercial Funding Partners</strong>, where I design, manage, and optimize lending websites through thoughtful UI/UX, SEO strategy, and lead-generation tools. I'm also on an <strong>App Development team</strong> maintaining/building a Flutter app with a <strong>100k+ user base</strong>.

      <br /><br />In the past, I’ve worked as an <strong>Analytics Engineer at Health Catalyst</strong>, where I led dashboard development and honed my data analysis skills, and as a <strong>Data Analyst at Cambi Solutions</strong>, collaborating with an app dev team to improve user experience. These roles gave me a strong foundation in adaptability, collaboration, and fast learning.

      <br /><br />If I'm not working, I'm flying down MTB trails on my Onewheel, enjoying a delicious pour-over, or doing something outdoorsy with my partner and our friends!
    </p>
  </main>;
}
