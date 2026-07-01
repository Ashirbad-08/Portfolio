import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ToolsSection from './components/ToolsSection'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <HeroSection />
      <main className="page page-content">
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
