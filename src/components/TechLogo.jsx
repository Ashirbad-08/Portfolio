import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import { SiExpress, SiJavascript, SiMongodb } from 'react-icons/si'
import { TbBrandCSharp, TbSql } from 'react-icons/tb'

export default function TechLogo({ name }) {
  const logos = {
    HTML: { icon: FaHtml5, color: '#e34f26' },
    CSS: { icon: FaCss3Alt, color: '#1572b6' },
    JavaScript: { icon: SiJavascript, color: '#f7df1e' },
    Bootstrap: { icon: FaBootstrap, color: '#7952b3' },
    Java: { icon: FaJava, color: '#f89820' },
    Python: { icon: FaPython, color: '#3776ab' },
    C: { icon: TbBrandCSharp, color: '#239120' },
    React: { icon: FaReact, color: '#61dafb' },
    'Node.js': { icon: FaNodeJs, color: '#5fa04e' },
    'Express.js': { icon: SiExpress, color: '#f3f7fd' },
    MongoDB: { icon: SiMongodb, color: '#47a248' },
    SQL: { icon: TbSql, color: '#4aa3ff' },
  }

  const logo = logos[name]
  const Logo = logo?.icon

  return Logo ? (
    <Logo className="tech-logo" style={{ color: logo.color }} aria-hidden="true" />
  ) : (
    <span className="tech-fallback">{name.slice(0, 2)}</span>
  )
}
