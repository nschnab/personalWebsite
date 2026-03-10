import { SectionHeader } from './Experience'

const skillCategories = [
  {
    label: 'Languages',
    icon: '{ }',
    items: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'Bash', 'PowerShell', 'HTML', 'SQL'],
  },
  {
    label: 'Tools & Platforms',
    icon: '⚙',
    items: [
      'ServiceNow',
      'Active Directory',
      'GitHub',
      'Splunk',
      'Cisco ISE',
      'Citrix Monitor',
      'Confluence',
      'Postman',
      'MySQL Workbench',
      'Ubuntu Linux',
      'Duo Security',
      'MS 365',
      'Palmetto Cluster (HPC)',
      'Jupyter Notebook',
      'VS Code',
    ],
  },
  {
    label: 'Certifications',
    icon: '✦',
    items: [
      'Associate ServiceNow Administrator',
      'Postman API Student Expert',
    ],
  },
  {
    label: 'Spoken Languages',
    icon: '◎',
    items: ['English – Native', 'German – B1'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.5rem, 8vw, 8rem)',
        background: '#080810',
      }}
    >
      <SectionHeader number="02" title="Skills & Certifications" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
        }}
      >
        {skillCategories.map(cat => (
          <div
            key={cat.label}
            style={{
              background: '#111827',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              padding: '1.75rem',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.35)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(100, 255, 218, 0.06)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#1e293b'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span
                className="mono"
                style={{
                  color: '#64ffda',
                  fontSize: '1.1rem',
                  background: 'rgba(100, 255, 218, 0.08)',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                }}
              >
                {cat.icon}
              </span>
              <h3 style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: 600 }}>{cat.label}</h3>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.items.map(item => (
                <span
                  key={item}
                  className="mono"
                  style={{
                    fontSize: '0.78rem',
                    color: '#94a3b8',
                    background: '#0d0d0d',
                    border: '1px solid #1e293b',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '4px',
                    transition: 'color 0.15s, border-color 0.15s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.target.style.color = '#64ffda'
                    e.target.style.borderColor = 'rgba(100, 255, 218, 0.3)'
                  }}
                  onMouseLeave={e => {
                    e.target.style.color = '#94a3b8'
                    e.target.style.borderColor = '#1e293b'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education + Awards row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem',
        }}
      >
        <div
          style={{
            background: '#111827',
            border: '1px solid #1e293b',
            borderRadius: '8px',
            padding: '1.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span
              className="mono"
              style={{
                color: '#64ffda',
                fontSize: '1.1rem',
                background: 'rgba(100, 255, 218, 0.08)',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                border: '1px solid rgba(100, 255, 218, 0.2)',
              }}
            >
              ◈
            </span>
            <h3 style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: 600 }}>Education</h3>
          </div>
          <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem' }}>
            B.S. Computer Science
          </p>
          <p className="mono" style={{ color: '#64ffda', fontSize: '0.85rem', marginTop: '4px' }}>
            Clemson University
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '4px' }}>
            Expected May 2026 · Clemson, SC
          </p>
        </div>

        <div
          style={{
            background: '#111827',
            border: '1px solid #1e293b',
            borderRadius: '8px',
            padding: '1.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span
              className="mono"
              style={{
                color: '#64ffda',
                fontSize: '1.1rem',
                background: 'rgba(100, 255, 218, 0.08)',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                border: '1px solid rgba(100, 255, 218, 0.2)',
              }}
            >
              ★
            </span>
            <h3 style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: 600 }}>Awards & Honors</h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0 }}>
            {[
              'Eagle Scout – Boy Scouts of America',
              '2nd Degree Black Belt – Kuk Sool Won',
              'Led self-defense workshop at local High School',
            ].map(item => (
              <li key={item} style={{ color: '#94a3b8', fontSize: '0.88rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#64ffda', flexShrink: 0 }}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
