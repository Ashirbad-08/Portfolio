import { tools } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ToolLogo from './ToolLogo'

export default function ToolsSection() {
  return (
    <section className="section tools-section" id="tools" data-section="Tools">
      <SectionHeading title="Daily Toolkit" />
      <div className="tool-grid">
        {tools.map((tool, index) => (
          <Reveal
            key={tool}
            className="tools-reveal"
            style={{ '--delay': `${index * 70}ms` }}
          >
            <article className="tool-card">
              <div className="tool-icon">
                <ToolLogo name={tool} />
              </div>
              <span>{tool}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
