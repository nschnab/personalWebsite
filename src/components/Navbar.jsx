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
        background: scrolled ? 'rgba(240, 236, 226, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(74, 168, 152, 0.2)' : 'none',
        boxShadow: scrolled ? '0 2px 12px rgba(30, 44, 52, 0.07)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        href="#about"
        className="cinzel"
        style={{ color: '#3a9080', fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.05em' }}
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
              color: '#5a7080',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s',
              fontFamily: "'JetBrains Mono', monospace",
            }}
            onMouseEnter={e => (e.target.style.color = '#4aa898')}
            onMouseLeave={e => (e.target.style.color = '#5a7080')}
          >
            <span style={{ color: '#e88278', marginRight: '4px' }}>0{i + 1}.</span>
            {link.label}
          </a>
        ))}
        <a
          href="./NolenSchnabelResume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#3a9080',
            border: '1px solid #4aa898',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontFamily: "'JetBrains Mono', monospace",
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'rgba(74, 168, 152, 0.1)'
            e.target.style.color = '#4aa898'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'transparent'
            e.target.style.color = '#3a9080'
          }}
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
          color: '#4aa898',
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
            background: '#f8f5f0',
            borderLeft: '1px solid rgba(74, 168, 152, 0.2)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '-4px 0 20px rgba(30, 44, 52, 0.08)',
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#1e2c34',
                textDecoration: 'none',
                fontSize: '1rem',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span style={{ color: '#e88278', marginRight: '8px' }}>0{i + 1}.</span>
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
