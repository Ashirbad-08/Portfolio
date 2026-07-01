import { skills } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechLogo from './TechLogo'

export default function SkillsSection() {
  return (
    <section className="section" id="skills" data-section="Skills">
      <SectionHeading title="Technical Skills" />
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <Reveal
            key={skill}
            className="skills-reveal"
            style={{ '--delay': `${index * 60}ms` }}
          >
            <article className="skill-card">
              <div className="skill-icon">
                <TechLogo name={skill} />
              </div>
              <span>{skill}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
