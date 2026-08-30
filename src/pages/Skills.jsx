import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      name: 'Containerization',
      icon: 'fas fa-docker',
      skills: ['Docker', 'Podman', 'Docker Compose', 'Container Registries (ECR, GCR, ACR)', 'Image Optimization']
    },
    {
      name: 'Orchestration',
      icon: 'fas fa-cube',
      skills: ['Kubernetes', 'Helm', 'kubectl', 'Docker Swarm', 'Kustomize', 'ArgoCD']
    },
    {
      name: 'Cloud Platforms',
      icon: 'fas fa-cloud',
      skills: ['AWS (EC2, ECS, EKS, S3, RDS, Lambda)', 'Azure (AKS, App Service, Azure DevOps)', 'Google Cloud (GKE, Cloud Run)', 'DigitalOcean']
    },
    {
      name: 'CI/CD & Automation',
      icon: 'fas fa-code-branch',
      skills: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'ArgoCD', 'CircleCI', 'Automated Testing & Deployment']
    },
    {
      name: 'Infrastructure as Code',
      icon: 'fas fa-server',
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Helm Charts', 'Configuration Management']
    },
    {
      name: 'Monitoring & Logging',
      icon: 'fas fa-chart-line',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic', 'CloudWatch', 'Custom Dashboards']
    },
    {
      name: 'Linux & Scripting',
      icon: 'fas fa-terminal',
      skills: ['Linux Administration', 'Bash Scripting', 'Python', 'Shell Scripts', 'Package Management']
    },
    {
      name: 'Networking',
      icon: 'fas fa-network-wired',
      skills: ['DNS', 'Load Balancing', 'VPC/Virtual Networks', 'SSL/TLS', 'Firewall Management', 'API Gateways']
    },
    {
      name: 'Security & Compliance',
      icon: 'fas fa-lock',
      skills: ['Secret Management (Vault)', 'Container Security', 'RBAC', 'Security Scanning', 'Compliance Automation', 'SSL Certificates']
    }
  ]

  return (
    <div className="page skills-page">
      <div className="container">
        <h1 className="page-title">Technical Skills</h1>
        <p className="skills-intro">A comprehensive overview of my technical expertise in DevOps engineering</p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <i className={category.icon}></i>
                <h3>{category.name}</h3>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <span className="skill-badge">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="proficiency-section">
          <h2>Proficiency Levels</h2>
          <div className="proficiency-grid">
            <div className="proficiency-item">
              <h4>Expert</h4>
              <p>Kubernetes, Docker, Terraform, AWS, Jenkins, Ansible</p>
            </div>
            <div className="proficiency-item">
              <h4>Advanced</h4>
              <p>Azure, GCP, Helm, GitLab CI, Prometheus, Linux Administration</p>
            </div>
            <div className="proficiency-item">
              <h4>Intermediate</h4>
              <p>Python, Bash, Vault, ArgoCD, Security Scanning</p>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            <div className="cert-card">
              <i className="fas fa-certificate"></i>
              <h4>Kubernetes Administration (CKA)</h4>
              <p>Certified Kubernetes Administrator</p>
            </div>
            <div className="cert-card">
              <i className="fas fa-certificate"></i>
              <h4>AWS Solutions Architect</h4>
              <p>Professional Level Certification</p>
            </div>
            <div className="cert-card">
              <i className="fas fa-certificate"></i>
              <h4>Docker Certified Associate</h4>
              <p>Container Specialization</p>
            </div>
            <div className="cert-card">
              <i className="fas fa-certificate"></i>
              <h4>HashiCorp Certified: Terraform Associate</h4>
              <p>Infrastructure as Code Expertise</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
