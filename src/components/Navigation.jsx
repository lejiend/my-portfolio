import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <i className="fas fa-server"></i> My DevOps Portfolio
        </Link>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link" onClick={closeMenu}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
