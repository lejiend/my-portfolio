import './About.css'

export default function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <h1 className="page-title">About Me</h1>
        
        <section className="about-intro">
          <div className="about-text">
            <p>
              I'm a passionate DevOps Engineer with a strong focus on building scalable, reliable infrastructure and automating complex deployment pipelines. My journey in technology has equipped me with deep expertise in cloud platforms, containerization, and modern infrastructure practices.
            </p>
            <p>
              With over 5 years of hands-on experience, I've successfully led infrastructure modernization initiatives, implemented GitOps workflows, and optimized systems to handle millions of requests daily. I'm committed to continuous learning and staying current with emerging DevOps technologies and best practices.
            </p>
          </div>
        </section>

        <section className="values-section">
          <h2>My Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Innovation</h3>
              <p>Continuously exploring new technologies and methodologies to improve infrastructure and deployment processes.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Reliability</h3>
              <p>Building robust systems that maintain high availability and implement disaster recovery strategies.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>Working closely with development and operations teams to streamline workflows and improve communication.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Knowledge Sharing</h3>
              <p>Mentoring junior team members and documenting best practices to elevate the entire team's capabilities.</p>
            </div>
          </div>
        </section>

        <section className="journey-section">
          <h2>My Journey</h2>
          <div className="journey-content">
            <p>
              My DevOps career began as a Linux Systems Administrator, where I gained foundational knowledge in server management and infrastructure basics. This evolved into containerization expertise with Docker, followed by deep dives into Kubernetes orchestration.
            </p>
            <p>
              Over the years, I've progressed to designing and implementing complete infrastructure solutions, including:
            </p>
            <ul className="journey-list">
              <li><strong>Cloud Infrastructure:</strong> Architecting multi-cloud solutions on AWS, Azure, and Google Cloud</li>
              <li><strong>Container Orchestration:</strong> Building production-grade Kubernetes clusters with security and scalability</li>
              <li><strong>CI/CD Implementation:</strong> Designing automated deployment pipelines using Jenkins, GitLab CI, and GitHub Actions</li>
              <li><strong>Infrastructure as Code:</strong> Creating reproducible infrastructure using Terraform and Ansible</li>
              <li><strong>Monitoring & Observability:</strong> Implementing comprehensive monitoring solutions with Prometheus, Grafana, and ELK Stack</li>
              <li><strong>Security & Compliance:</strong> Integrating security scanning and compliance checks into deployment workflows</li>
            </ul>
          </div>
        </section>

        <section className="highlights-section">
          <h2>Key Achievements</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <h3>40% Cost Reduction</h3>
              <p>Led infrastructure optimization initiatives resulting in significant cloud spending reduction through right-sizing and auto-scaling strategies.</p>
            </div>
            <div className="highlight-item">
              <h3>99.99% Uptime</h3>
              <p>Designed and maintained highly available systems with redundancy and failover mechanisms achieving excellent SLA compliance.</p>
            </div>
            <div className="highlight-item">
              <h3>70% Faster Deployments</h3>
              <p>Implemented comprehensive CI/CD pipelines reducing deployment time from hours to minutes through automation.</p>
            </div>
            <div className="highlight-item">
              <h3>Team Growth</h3>
              <p>Mentored 5+ junior engineers in DevOps practices, helping them transition into infrastructure roles and grow their expertise.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
