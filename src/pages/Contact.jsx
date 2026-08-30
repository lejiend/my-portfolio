import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="page contact-page">
      <div className="container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="contact-intro">I'm always interested in hearing about new projects and opportunities</p>

        <div className="contact-content">
          <div className="contact-methods">
            <div className="contact-card">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>your.email@example.com</p>
              <a href="mailto:your.email@example.com" className="contact-link">Send Email</a>
            </div>
            <div className="contact-card">
              <i className="fab fa-linkedin"></i>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">Visit Profile</a>
            </div>
            <div className="contact-card">
              <i className="fab fa-github"></i>
              <h3>GitHub</h3>
              <p>View my repositories</p>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">View Projects</a>
            </div>
            <div className="contact-card">
              <i className="fab fa-twitter"></i>
              <h3>Twitter</h3>
              <p>Follow me</p>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-link">Follow</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            
            {submitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or inquiry..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <section className="faq-section">
          <h2>FAQ</h2>
          <div className="faq-items">
            <div className="faq-item">
              <h4>What's your typical response time?</h4>
              <p>I aim to respond to all inquiries within 24-48 hours. For urgent matters, you can reach me via LinkedIn.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer consulting services?</h4>
              <p>Yes, I offer DevOps consulting for organizations looking to optimize their infrastructure and deployment processes.</p>
            </div>
            <div className="faq-item">
              <h4>What's your availability for new projects?</h4>
              <p>I'm open to discussing new opportunities and can often accommodate projects depending on current commitments.</p>
            </div>
            <div className="faq-item">
              <h4>Do you work with remote teams?</h4>
              <p>Absolutely! I have extensive experience working with distributed and remote teams across different time zones.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
