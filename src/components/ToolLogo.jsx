import { FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiPostman } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

export default function ToolLogo({ name }) {
  const logos = {
    Git: { icon: FaGitAlt, color: '#f05032' },
    GitHub: { icon: FaGithub, color: '#f3f7fd' },
    Postman: { icon: SiPostman, color: '#ff6c37' },
    'VS Code': { icon: VscVscode, color: '#007acc' },
  }

  const logo = logos[name]
  const Logo = logo?.icon

  return Logo ? (
    <Logo className="tech-logo" style={{ color: logo.color }} aria-hidden="true" />
  ) : (
    <span className="tech-fallback">{name.slice(0, 2)}</span>
  )
}
