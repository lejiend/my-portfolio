import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      period: '2023 - Present',
      position: 'Senior DevOps Engineer',
      company: 'Tech Company Inc.',
      responsibilities: [
        'Led infrastructure modernization initiative, reducing operational costs by 40%',
        'Designed and implemented GitOps workflow using ArgoCD for continuous deployments',
        'Mentored junior team members on DevOps best practices and Kubernetes architecture',
        'Managed Kubernetes cluster serving 2M+ daily requests with 99.99% uptime',
        'Implemented comprehensive monitoring and alerting infrastructure'
      ]
    },
    {
      period: '2021 - 2023',
      position: 'DevOps Engineer',
      company: 'Cloud Solutions Ltd.',
      responsibilities: [
        'Built and maintained production Kubernetes clusters serving 1M+ requests/day',
        'Automated infrastructure deployment using Terraform and Ansible',
        'Implemented comprehensive monitoring and logging solutions using Prometheus and ELK',
        'Reduced deployment time from 2 hours to 15 minutes through CI/CD automation',
        'Led cloud migration project from on-premise to AWS infrastructure'
      ]
    },
    {
      period: '2019 - 2021',
      position: 'Systems Administrator',
      company: 'StartUp Networks',
      responsibilities: [
        'Managed Linux servers and cloud infrastructure across multiple environments',
        'Implemented automated backup and disaster recovery solutions',
        'Provided infrastructure support to development team for application deployments',
        'Implemented security best practices and access controls',
        'Trained team members on Linux administration and system optimization'
      ]
    },
    {
      period: '2018 - 2019',
      position: 'Junior Systems Administrator',
      company: 'IT Solutions Pvt Ltd',
      responsibilities: [
        'Assisted in infrastructure maintenance and monitoring',
        'Managed user accounts and access permissions',
        'Performed system updates and security patches',
        'Documented infrastructure configurations and procedures',
        'Provided technical support to internal teams'
      ]
    }
  ]

  return (
    <div className="page experience-page">
      <div className="container">
        <h1 className="page-title">Professional Experience</h1>
        <p className="experience-intro">My journey in DevOps and infrastructure engineering</p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.position}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <section className="skills-gained-section">
          <h2>Key Skills Developed</h2>
          <div className="skills-matrix">
            <div className="skill-row">
              <div className="skill-label">Container Orchestration</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '95%' }}>95%</div>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-label">Cloud Platforms (AWS/Azure/GCP)</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '90%' }}>90%</div>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-label">Infrastructure as Code</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '88%' }}>88%</div>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-label">CI/CD Pipelines</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '92%' }}>92%</div>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-label">Monitoring & Logging</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '85%' }}>85%</div>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-label">Linux Administration</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '93%' }}>93%</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
