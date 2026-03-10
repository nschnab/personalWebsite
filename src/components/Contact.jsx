import { useState } from 'react'
import { SectionHeader } from './Experience'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const mailto = `mailto:nolen.schnabel@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: '#0d0d0d',
    border: '1px solid #1e293b',
    borderRadius: '6px',
    padding: '0.75rem 1rem',
    color: '#e2e8f0',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.5rem, 8vw, 8rem)',
        background: '#080810',
      }}
    >
      <SectionHeader number="04" title="Get In Touch" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginTop: '3rem',
          maxWidth: '900px',
        }}
      >
        {/* Left: intro + links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.75 }}>
            I'm currently open to internship opportunities and new connections. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              {
                icon: '✉',
                label: 'nolen.schnabel@gmail.com',
                href: 'mailto:nolen.schnabel@gmail.com',
              },
              {
                icon: '⟁',
                label: 'linkedin.com/in/nschnab',
                href: 'https://www.linkedin.com/in/nschnab',
              },
              {
                icon: '☎',
                label: '864-986-2462',
                href: 'tel:8649862462',
              },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '6px',
                  border: '1px solid #1e293b',
                  background: '#111827',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#64ffda'
                  e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#94a3b8'
                  e.currentTarget.style.borderColor = '#1e293b'
                }}
              >
                <span className="mono" style={{ color: '#64ffda', fontSize: '1rem' }}>
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: contact form */}
        <div>
          {submitted ? (
            <div
              style={{
                background: '#111827',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <div className="mono" style={{ color: '#64ffda', fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
              <p style={{ color: '#e2e8f0', fontWeight: 600 }}>Message prepared!</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                Your email client should open. If not, email me directly at nolen.schnabel@gmail.com
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: '1.5rem',
                  background: 'transparent',
                  color: '#64ffda',
                  border: '1px solid #64ffda',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: '#111827',
                border: '1px solid #1e293b',
                borderRadius: '8px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div>
                <label className="mono" style={{ color: '#64ffda', fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  placeholder="Your name"
                  onFocus={e => (e.target.style.borderColor = 'rgba(100, 255, 218, 0.5)')}
                  onBlur={e => (e.target.style.borderColor = '#1e293b')}
                />
              </div>
              <div>
                <label className="mono" style={{ color: '#64ffda', fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  placeholder="your@email.com"
                  onFocus={e => (e.target.style.borderColor = 'rgba(100, 255, 218, 0.5)')}
                  onBlur={e => (e.target.style.borderColor = '#1e293b')}
                />
              </div>
              <div>
                <label className="mono" style={{ color: '#64ffda', fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>
                  MESSAGE
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="What's on your mind?"
                  onFocus={e => (e.target.style.borderColor = 'rgba(100, 255, 218, 0.5)')}
                  onBlur={e => (e.target.style.borderColor = '#1e293b')}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: '#64ffda',
                  color: '#0d0d0d',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.target.style.opacity = '0.85')}
                onMouseLeave={e => (e.target.style.opacity = '1')}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
