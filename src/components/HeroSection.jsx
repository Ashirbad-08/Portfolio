import Icon from './Icon'
import Reveal from './Reveal'
import SpiderWebCanvas from './SpiderWebCanvas'

export default function HeroSection() {
  return (
    <section className="hero section" id="home" data-section="Home">
      <SpiderWebCanvas />
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />
      <Reveal className="hero-copy">
        <p className="eyebrow">Interactive Portfolio</p>
        <h1>Ashirbad Das</h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-text">
          Hi, I’m Ashirbad — a backend developer who loves turning ideas into real-world applications. I work with Node.js and modern technologies to build efficient, scalable, and secure systems.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="button button-primary">
            <Icon name="download" />
            Download Resume
          </a>
          <a href="#projects" className="button button-secondary">
            View Work
          </a>
        </div>
      </Reveal>
    </section>
  )
}
