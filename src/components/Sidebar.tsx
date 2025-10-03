import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setIsMobileOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileOpen(!isMobileOpen)
    } else {
      setIsCollapsed(!isCollapsed)
    }
  }

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button 
          className={`mobile-menu-btn ${isMobileOpen ? 'open' : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <i className="fas fa-snowflake"></i>
          <span>Good day, visitor!</span>
        </div>
        <button 
          className="sidebar-toggle" 
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i className={`fas fa-chevron-left ${isCollapsed ? 'rotated' : ''}`}></i>
        </button>
      </div>
      
      <ul className="nav-menu">
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            <i className="fas fa-user"></i>
            <span>About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/portfolio" 
            className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}
          >
            <i className="fas fa-briefcase"></i>
            <span>Portfolio</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/skills" 
            className={`nav-link ${isActive('/skills') ? 'active' : ''}`}
          >
            <i className="fas fa-code"></i>
            <span>Skills</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>

      <div className="sidebar-footer">
        <div className="social-links">
          <a href="https://github.com" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Sidebar