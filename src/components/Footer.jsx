import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <h4>Ashirbad Das</h4>
      <p>&copy; 2026 Ashirbad Das. All rights reserved.</p>
      <div className="footer-icons">
        <a href="#contact" aria-label="Email">
          <Icon name="mail" />
        </a>
        <a href="https://www.linkedin.com/in/ashirbad-das-49a8152b1/" aria-label="linkedin">
          <Icon name="linkedin" />
        </a>
        <a href="https://github.com/Ashirbad-08" aria-label="GitHub">
          <Icon name="github" />
        </a>
      </div>
    </footer>
  )
}
