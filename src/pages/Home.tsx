import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Welcome to my</span>
              <span className="title-line gradient-text">Cold Life!</span>
            </h1>
            <p className="hero-description">
              A developer with a passion for creating beautiful and user-friendly systems
              for the web. Let's build something amazing together.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                <span>View Work</span>
                <i className="fas fa-external-link-alt"></i>
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="snow-globe">
              <div className="globe-base"></div>
              <div className="globe-sphere">
                <div className="globe-content">
                  <div className="mountain"></div>
                  <div className="snow-inside"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="section-header">
          <h2>Offerings</h2>
          <p>Combining technical expertise with creative vision</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Clean Code</h3>
            <p>Writing with clean, easy-to-follow, well-documented code to prevent confusion</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Responsive Design</h3>
            <p>Ensuring that designs are smooth, pleasant to the eyes, and bugless.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Performance</h3>
            <p>Optimizing for speed, accessibility, and user experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home