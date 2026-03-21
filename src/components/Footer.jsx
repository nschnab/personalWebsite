export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #c8d4d0',
        padding: '2rem clamp(1.5rem, 8vw, 8rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        background: '#f0ece2',
      }}
    >
      <span className="mono" style={{ color: '#7a9098', fontSize: '0.8rem' }}>
        <span style={{ color: '#4aa898' }}>Nolen C. Schnabel</span> · Built with React + Vite
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a
          href="mailto:nolen.schnabel@gmail.com"
          style={{ color: '#7a9098', fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'monospace', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target.style.color = '#4aa898')}
          onMouseLeave={e => (e.target.style.color = '#7a9098')}
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/nschnab"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#7a9098', fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'monospace', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target.style.color = '#4aa898')}
          onMouseLeave={e => (e.target.style.color = '#7a9098')}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
