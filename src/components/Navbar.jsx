import { useEffect, useState } from 'react'
import Icon from './Icon'
import { navItems } from '../data/portfolioData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsMenuOpen(false)
      }
    }

    handleScroll()
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header
      className={`topbar ${isScrolled ? 'scrolled' : 'at-home'} ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="topbar-row">
        <div className="brand">Ashirbad Das</div>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} />
        </button>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
      <a
        className={`contact-chip ${isMenuOpen ? 'open' : ''}`}
        href="#contact"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </a>
    </header>
  )
}
