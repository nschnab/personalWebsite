import { useEffect, useState } from 'react'

const roles = [
  'Computer Science Student',
  'IT Lead @ Clemson University',
  'ServiceNow Administrator',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 clamp(1.5rem, 8vw, 8rem)',
        paddingTop: '80px',
        background: 'linear-gradient(135deg, #0d0d0d 0%, #0a0f1e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '900px', animation: 'fadeInUp 0.8s ease forwards' }}>
        <p
          className="mono"
          style={{ color: '#64ffda', fontSize: '1rem', marginBottom: '1rem', opacity: 0.9 }}
        >
          Hi, my name is
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 800,
            color: '#e2e8f0',
            lineHeight: 1.1,
            marginBottom: '0.5rem',
          }}
        >
          Nolen C. Schnabel
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
            fontWeight: 600,
            color: '#94a3b8',
            marginBottom: '1.5rem',
            minHeight: '1.5em',
          }}
          className="mono"
        >
          <span style={{ color: '#64ffda' }}>&gt;</span>{' '}
          {displayed}
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              background: '#64ffda',
              verticalAlign: 'middle',
              marginLeft: '2px',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </h2>

        <p
          style={{
            maxWidth: '560px',
            color: '#94a3b8',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}
        >
          CS student at Clemson University graduating May 2026. I build systems, solve problems, and bridge the gap between technology and the people who use it. Currently leading helpdesk operations and building ServiceNow workflows.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#experience"
            style={{
              background: 'transparent',
              color: '#64ffda',
              border: '1px solid #64ffda',
              padding: '0.75rem 1.75rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontFamily: "'JetBrains Mono', monospace",
              transition: 'background 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              background: '#64ffda',
              color: '#0d0d0d',
              border: '1px solid #64ffda',
              padding: '0.75rem 1.75rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              transition: 'opacity 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Get In Touch
          </a>
        </div>

        {/* Quick stats */}
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
            marginTop: '4rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '4,000+', label: 'Tickets Routed' },
            { value: '2,500+', label: 'Tickets Resolved' },
            { value: '15+', label: 'Employees Trained' },
            { value: 'Top 10%', label: 'Customer Satisfaction' },
          ].map(stat => (
            <div key={stat.label}>
              <div
                className="mono"
                style={{ color: '#64ffda', fontSize: '1.5rem', fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.5,
        }}
      >
        <span className="mono" style={{ fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '2px' }}>
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, #64ffda, transparent)',
          }}
        />
      </div>
    </section>
  )
}
