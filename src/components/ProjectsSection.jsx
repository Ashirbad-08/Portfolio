import { projectTags } from '../data/portfolioData'
import { projectTags1 } from '../data/portfolioData'
import projectImage from '../assets/Gemini_Generated_Image_eyfibieyfibieyfi.png'
import tourTravelImage from '../assets/Gemini_Generated_Image_femkgqfemkgqfemk.png'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function ProjectsSection() {
  const projectUrl = '#'

  return (
    <section className="section" id="projects" data-section="Projects">
      <SectionHeading title="Featured Projects" />
      <div className="project-grid">
        <Reveal>
          <article className="project-card featured">
            <div className="project-visual">
              <img src={projectImage} alt="" />
            </div>
            <div className="project-copy">
              <div className="project-title-row">
                <h3>Student Attendance Management System</h3>
                <a href={projectUrl} aria-label="Open project">
                  <Icon name="external" />
                </a>
              </div>
              <p>
                A web-based application developed using HTML, CSS, JavaScript, PHP, and MySQL to streamline student attendance tracking and record management. Features include secure user authentication, student and attendance management, database integration, and a responsive interface for efficient and accurate attendance monitoring.
              </p>
              <div className="tag-row">
                {projectTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={projectUrl} className="project-link" aria-label="View Student Attendance Management System project">
                  <Icon name="external" />
                  View Project
                </a>
              </div>
            </div>
          </article>
        </Reveal>
        <Reveal>
          <article className="project-card featured">
            <div className="project-visual">
              <img src={tourTravelImage} alt="" />
            </div>
            <div className="project-copy">
              <div className="project-title-row">
                <h3>Tour and Travel Management System</h3>
                <a href={projectUrl} aria-label="Open project">
                  <Icon name="external" />
                </a>
              </div>
              <p>
                Built using the MERN Stack, this web application enables users to explore tour packages, make bookings, and manage travel information. It features secure authentication, responsive design, and RESTful APIs for efficient travel management.
              </p>
              <div className="tag-row">
                {projectTags1.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={projectUrl} className="project-link" aria-label="View Tour and Travel Management System project">
                  <Icon name="external" />
                  View Project
                </a>
              </div>
            </div>
          </article>
        </Reveal>
        <Reveal>
          <article className="project-card placeholder">
            <div className="plus-mark">+</div>
            <p>Next Masterpiece Incoming</p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
