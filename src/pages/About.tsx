import './About.css'

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Who am I?</h1>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/assets/pfp.jpg" alt="Jennylyn Rea Alvez Profile Photo" className="profile-photo" />
            </div>
            <div className="profile-info">
              <h2>Hello, I'm Jennylyn Rea Alvez</h2>
              <p className="role">Full Stack Developer</p>
              <p className="bio">
                I'm an aspiring developer with a passion for creating beautiful and user-friendly systems
                for the web. With a background in computer science and a keen eye for design, I strive to build
                applications that are not only functional but also visually appealing.
              </p>
              <div className="resume-download">
                <a href="/assets/resume.pdf" download className="btn btn-primary">
                  <i className="fas fa-download"></i>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section card">
          <h2><i className="fas fa-briefcase"></i> Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3>Placeholder 1</h3>
                <p className="experience-company">Placeholder company 1 • Date A - Date B</p>
                <p className="experience-description">
                  Simple job description placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About