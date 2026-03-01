import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX, FiHeart } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Leistungen', to: 'leistungen' },
  { label: 'Über uns', to: 'ueber-uns' },
  { label: 'Einzugsgebiet', to: 'einzugsgebiet' },
  { label: 'Kontakt', to: 'kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="hero" smooth duration={600} className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <FiHeart className="navbar__logo-icon" />
          <span>Herzenssache</span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className="navbar__link"
                activeClass="navbar__link--active"
                spy
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="kontakt" smooth duration={600} offset={-80} className="btn-primary navbar__cta">
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
          id="hamburger-btn"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="kontakt"
              smooth
              duration={600}
              offset={-80}
              className="btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Jetzt kontaktieren
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
