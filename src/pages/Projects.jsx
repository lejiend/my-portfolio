import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'Kubernetes Cluster Setup',
      icon: 'fas fa-cube',
      description: 'Designed and deployed a production-grade Kubernetes cluster with auto-scaling, monitoring, and security best practices. Implemented RBAC, network policies, and pod security standards.',
      tags: ['Kubernetes', 'AWS', 'Terraform', 'Helm'],
      impact: 'Reduced infrastructure costs by 35% and improved deployment efficiency'
    },
    {
      title: 'CI/CD Pipeline Automation',
      icon: 'fas fa-code-branch',
      description: 'Built automated deployment pipelines using Jenkins and GitLab CI with comprehensive testing, security scanning, and multi-stage approvals.',
      tags: ['Jenkins', 'GitLab CI', 'Docker', 'Automation'],
      impact: 'Reduced deployment time from 2 hours to 15 minutes (87% improvement)'
    },
    {
      title: 'Infrastructure as Code',
      icon: 'fas fa-server',
      description: 'Implemented complete infrastructure automation using Terraform and Ansible, enabling consistent and reproducible deployments across multiple environments.',
      tags: ['Terraform', 'Ansible', 'AWS', 'IaC'],
      impact: 'Eliminated manual configuration errors and reduced setup time by 80%'
    },
    {
      title: 'Monitoring & Observability',
      icon: 'fas fa-chart-line',
      description: 'Set up comprehensive monitoring stack using Prometheus and Grafana with custom alerting rules, dashboards, and log aggregation using ELK Stack.',
      tags: ['Prometheus', 'Grafana', 'ELK', 'Alerting'],
      impact: 'Reduced MTTR (Mean Time to Recovery) from 30 mins to 5 mins'
    },
    {
      title: 'Security & Compliance',
      icon: 'fas fa-lock',
      description: 'Implemented security scanning, vulnerability management, and compliance automation across the infrastructure. Integrated Vault for secret management.',
      tags: ['Vault', 'Trivy', 'OPA', 'Security'],
      impact: 'Achieved 99.95% compliance score and zero critical vulnerabilities'
    },
    {
      title: 'Multi-Cloud Migration',
      icon: 'fas fa-exchange-alt',
      description: 'Led migration of legacy applications to containerized infrastructure across AWS, Azure, and GCP. Implemented disaster recovery and multi-region failover.',
      tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Migration'],
      impact: 'Completed migration with zero downtime and 40% cost savings'
    }
  ]

  return (
    <div className="page projects-page">
      <div className="container">
        <h1 className="page-title">Featured Projects</h1>
        <p className="projects-intro">A selection of key projects that showcase my DevOps expertise and impact</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <i className={project.icon}></i>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-impact">
                <i className="fas fa-star"></i>
                <span>{project.impact}</span>
              </div>
              <a href="#contact" className="project-link">Learn More →</a>
            </div>
          ))}
        </div>

        <section className="project-stats">
          <h2>Project Statistics</h2>
          <div className="stats-grid">
            <div className="stat">
              <h4>20+</h4>
              <p>Successful Projects</p>
            </div>
            <div className="stat">
              <h4>1M+</h4>
              <p>Daily Requests Handled</p>
            </div>
            <div className="stat">
              <h4>99.99%</h4>
              <p>Average Uptime</p>
            </div>
            <div className="stat">
              <h4>50+ hrs</h4>
              <p>Average Time Saved per Project</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
