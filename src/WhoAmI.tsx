/**
 * Contains the info about me!
 * @returns the section that explains who I am and what I do
 */
export default function WhoAmI() {
  return <main id="whoami">
    {/* Title */}
    <h1 className="section-title">
      Who I Am
    </h1>

    {/* Divider */}
  <hr className="section-divider" />
  <p id="Introduction" className="body-text max-w-xl">
      I'm a Software Engineer focusing on frontend systems and design, and I'm passionate about software and people.

      <br /><br /> Currently I work for Commercial Funding Partners, they're a lending firm based out of Utah and I take care of a some of the IT/Web work for them. I've met a lot of great people here! I'll be interning at a startup called Ambrook in just a couple weeks, which I'm so excited for! I could rave about those guys all day, but let's leave it at "I'm excited to work with them".

      <br /><br />I've had the unique opportunity to be working in tech since my senior year of high school. I took a position at Health Catalyst doing BI/Data Science work for them, and they shaped so much of what you see before you today. I also worked for some friends at Cambi Solutions, where I parsed some data for an AI system.

      <br /><br />I'm motivated by my love for the people in my life, so that's what fills my free time. The best days are spent hiking or skiing or just talking with fun and interesting people, the best of which is my girlfriend. I'm also a huge nerd, and I usually have a book or project or some other task to chew on.  
    </p>
  </main>;
}
