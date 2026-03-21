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
    background: '#f0ece2',
    border: '1px solid #c8d4d0',
    borderRadius: '6px',
    padding: '0.75rem 1rem',
    color: '#1e2c34',
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
        background: '#e8e4da',
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
          <p style={{ color: '#4a606a', fontSize: '1rem', lineHeight: 1.75 }}>
            I'm currently open to full-time opportunities and new connections. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { icon: '✉', label: 'nolen.schnabel@gmail.com', href: 'mailto:nolen.schnabel@gmail.com' },
              { icon: '⟁', label: 'linkedin.com/in/nschnab', href: 'https://www.linkedin.com/in/nschnab' },
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
                  color: '#4a606a',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '6px',
                  border: '1px solid #c8d4d0',
                  background: '#f8f5f0',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#3a9080'
                  e.currentTarget.style.borderColor = 'rgba(74, 168, 152, 0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#4a606a'
                  e.currentTarget.style.borderColor = '#c8d4d0'
                }}
              >
                <span className="mono" style={{ color: '#4aa898', fontSize: '1rem' }}>{link.icon}</span>
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
                background: '#f8f5f0',
                border: '1px solid rgba(74, 168, 152, 0.4)',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <div className="mono" style={{ color: '#4aa898', fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
              <p style={{ color: '#1e2c34', fontWeight: 600 }}>Message prepared!</p>
              <p style={{ color: '#4a606a', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                Your email client should open. If not, email me directly at nolen.schnabel@gmail.com
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: '1.5rem',
                  background: 'transparent',
                  color: '#3a9080',
                  border: '1px solid #4aa898',
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
                background: '#f8f5f0',
                border: '1px solid #c8d4d0',
                borderRadius: '8px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div>
                <label className="mono" style={{ color: '#3a9080', fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>NAME</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  placeholder="Your name"
                  onFocus={e => (e.target.style.borderColor = 'rgba(74, 168, 152, 0.6)')}
                  onBlur={e => (e.target.style.borderColor = '#c8d4d0')}
                />
              </div>
              <div>
                <label className="mono" style={{ color: '#3a9080', fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>EMAIL</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  placeholder="your@email.com"
                  onFocus={e => (e.target.style.borderColor = 'rgba(74, 168, 152, 0.6)')}
                  onBlur={e => (e.target.style.borderColor = '#c8d4d0')}
                />
              </div>
              <div>
                <label className="mono" style={{ color: '#3a9080', fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>MESSAGE</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="What's on your mind?"
                  onFocus={e => (e.target.style.borderColor = 'rgba(74, 168, 152, 0.6)')}
                  onBlur={e => (e.target.style.borderColor = '#c8d4d0')}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: '#4aa898',
                  color: '#f8f5f0',
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
