import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(13, 13, 13, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(100, 255, 218, 0.1)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        href="#about"
        className="mono"
        style={{ color: '#64ffda', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}
      >
        nolen.dev
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s',
              fontFamily: "'JetBrains Mono', monospace",
            }}
            onMouseEnter={e => (e.target.style.color = '#64ffda')}
            onMouseLeave={e => (e.target.style.color = '#94a3b8')}
          >
            <span style={{ color: '#64ffda', marginRight: '4px' }}>0{i + 1}.</span>
            {link.label}
          </a>
        ))}
        <a
          href="./NolenSchnabelResume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#64ffda',
            border: '1px solid #64ffda',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontFamily: "'JetBrains Mono', monospace",
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.target.style.background = 'rgba(100, 255, 218, 0.1)')}
          onMouseLeave={e => (e.target.style.background = 'transparent')}
        >
          Resume
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#64ffda',
          cursor: 'pointer',
          fontSize: '1.5rem',
          padding: '0.5rem',
        }}
        className="show-mobile"
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            right: 0,
            width: '70vw',
            maxWidth: '300px',
            height: '100vh',
            background: '#111827',
            borderLeft: '1px solid rgba(100, 255, 218, 0.15)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '1rem',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span style={{ color: '#64ffda', marginRight: '8px' }}>0{i + 1}.</span>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
