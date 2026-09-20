import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My DevOps Portfolio</h1>
          <p className="hero-subtitle">Specializing in Cloud Infrastructure, Containerization & CI/CD Pipelines</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-icon">
            <i className="fas fa-cloud"></i>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Uptime Maintained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Preview */}
      <section className="expertise-preview">
        <div className="container">
          <h2>Core Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <i className="fas fa-docker"></i>
              <h3>Containerization</h3>
              <p>Docker, Podman, Container registries</p>
            </div>
            <div className="expertise-card">
              <i className="fas fa-cube"></i>
              <h3>Orchestration</h3>
              <p>Kubernetes, Docker Swarm, Helm</p>
            </div>
            <div className="expertise-card">
              <i className="fas fa-cloud"></i>
              <h3>Cloud Platforms</h3>
              <p>AWS, Azure, Google Cloud</p>
            </div>
            <div className="expertise-card">
              <i className="fas fa-code-branch"></i>
              <h3>CI/CD</h3>
              <p>Jenkins, GitLab CI, GitHub Actions</p>
            </div>
          </div>
          <div className="cta-section">
            <Link to="/skills" className="btn btn-primary">
              Explore All Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
