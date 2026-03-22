import { useEffect, useState, Suspense, lazy } from 'react'

const CastleScene = lazy(() => import('./CastleScene'))

const roles = [
  'Computer Science Student',
  'IT Lead @ Clemson University',
  'ServiceNow Administrator'
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
        flexDirection: 'row',
        alignItems: 'stretch',
        padding: 0,
        paddingTop: '64px',
        background: 'linear-gradient(135deg, #f0ece2 0%, #e8e4da 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(74, 168, 152, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 168, 152, 0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Left: text content */}
      <div
        style={{
          flex: '1 1 55%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(2rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '560px', animation: 'fadeInUp 0.8s ease forwards' }}>
          <p
            className="mono"
            style={{ color: '#4aa898', fontSize: '0.95rem', marginBottom: '0.75rem', opacity: 0.9 }}
          >
            ✦ Hi, my name is
          </p>

          <h1
            className="cinzel"
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
              fontWeight: 700,
              color: '#1e2c34',
              lineHeight: 1.15,
              marginBottom: '0.5rem',
              letterSpacing: '0.02em',
            }}
          >
            Nolen Schnabel
          </h1>

          <h2
            style={{
              fontSize: 'clamp(1rem, 2.8vw, 1.9rem)',
              fontWeight: 500,
              color: '#4a606a',
              marginBottom: '1.5rem',
              minHeight: '1.5em',
            }}
            className="mono"
          >
            <span style={{ color: '#4aa898' }}>&gt;</span>{' '}
            {displayed}
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1em',
                background: '#4aa898',
                verticalAlign: 'middle',
                marginLeft: '2px',
                animation: 'blink 1s step-end infinite',
              }}
            />
          </h2>

          <p
            style={{
              maxWidth: '520px',
              color: '#4a606a',
              fontSize: '1rem',
              lineHeight: 1.78,
              marginBottom: '2.5rem',
            }}
          >
            <strong>People Leadership:</strong> Lead IT team of 20+ members to provide top-tier support for 15,000+ students and staff<br /><br />
            <strong>Process Optimization:</strong> Streamlined support workflows, reducing ticket resolution time by 20% - 30% and improving customer satisfaction<br /><br />
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#experience"
              style={{
                background: 'transparent',
                color: '#3a9080',
                border: '1px solid #4aa898',
                padding: '0.75rem 1.75rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontFamily: "'JetBrains Mono', monospace",
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(74, 168, 152, 0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              View My Work
            </a>
            <a
              href="#contact"
              style={{
                background: '#4aa898',
                color: '#f8f5f0',
                border: '1px solid #4aa898',
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
              marginTop: '3.5rem',
              flexWrap: 'wrap',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(74, 168, 152, 0.22)',
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
                  style={{ color: '#4aa898', fontSize: '1.4rem', fontWeight: 700 }}
                >
                  {stat.value}
                </div>
                <div style={{ color: '#7a9098', fontSize: '0.78rem', marginTop: '2px' }}>
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
            left: 'clamp(1.5rem, 5vw, 5rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.5rem',
            opacity: 0.4,
          }}
        >
          <span className="mono" style={{ fontSize: '0.7rem', color: '#5e7d8c', letterSpacing: '2px' }}>
            SCROLL
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, #4aa898, transparent)',
            }}
          />
        </div>
      </div>

      {/* Right: 3D castle scene */}
      <div
        style={{
          flex: '1 1 45%',
          minHeight: '420px',
          position: 'relative',
        }}
        className="castle-panel"
      >
        <Suspense
          fallback={
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7a9098',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
              }}
            >
              Loading castle...
            </div>
          }
        >
          <CastleScene />
        </Suspense>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about {
            flex-direction: column !important;
          }
          .castle-panel {
            min-height: 320px !important;
            flex: 0 0 320px !important;
          }
        }
      `}</style>
    </section>
  )
}
