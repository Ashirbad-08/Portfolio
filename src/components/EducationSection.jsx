import bachelorLogo from '../assets/1.jpg'
import collegeLogo from '../assets/Logo.png'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function EducationSection() {
  return (
    <section className="section" id="education" data-section="Education">
      <SectionHeading title="Academic Background" />
      <div className="education-list">
        <Reveal>
          <article className="education-card">
            <div className="college-badge"><img src={collegeLogo} alt="" /></div>
            <div className="education-copy">
              <p className="mini-label"></p>
              <h3>Master of Computer Application</h3>
              <p className="education-meta">
                College of IT and Management Education <span>2023 - 2025</span>
              </p>
              <br />
              <p>
                Specializing in core software engineering principles and modern computing
                architectures, with a strong focus on hands-on development, databases, and
                algorithmic thinking.
              </p>
            </div>
          </article>
        </Reveal>
        <Reveal>
          <article className="education-card">
            <div className="college-badge"><img src={bachelorLogo} alt="" /></div>
            <div className="education-copy">
              <p className="mini-label"></p>
              <h3>Bachelor of Science</h3>
              <p className="education-meta">
                Kharasrota Mahavidyalaya Degree College <span>2020 - 2023</span>
              </p>
              <br />
              <p>
                Built a strong foundation in programming, database management,
                web technologies, and computer science fundamentals through
                academic projects and practical coursework.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
