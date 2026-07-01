import { timelinePoints } from '../data/portfolioData'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function ExperienceSection() {
  return (
    <section className="section" id="experiences" data-section="Experiences">
      <SectionHeading title="Professional Journey" />
      <Reveal>
        <div className="timeline-layout">
          <div className="timeline-track" aria-hidden="true">
            <span className="timeline-ring" />
          </div>
          <article className="experience-card">
            <div className="experience-top">
              <div className="experience-icon">
                <Icon name="briefcase" />
              </div>
              <div>
                <h3>Node.js Backend Intern</h3>
                <p>Dott Ciblez Technologies</p>
              </div>
              <span className="experience-meta">Jan 2026 - May 2026</span>
            </div>
            <ul>
              {timelinePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </Reveal>
    </section>
  )
}
