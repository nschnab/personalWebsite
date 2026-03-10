const experiences = [
  {
    role: 'Helpdesk Student Lead / ServiceNow Catalog Administrator',
    company: 'Clemson University',
    location: 'Clemson, SC',
    period: 'June 2024 – Present',
    bullets: [
      'Train 15+ new student employees, guiding them on procedure use cases and SOPs to bring swift resolutions to customers\' technical challenges.',
      'Consistently ranked in the top 10% of student employees based on customer satisfaction and completed incidents, averaging 25 completed per hour.',
      'Assisted with the transition from Cherwell to ServiceNow, including beta testing, QA testing, and implementing QOL features while training IT staff across 5+ teams.',
      'Develop both front-end intake forms and back-end workflows for Catalog Requests to log interactions — examples: Identity Verification and Hardware Repair Process.',
    ],
    tags: ['ServiceNow', 'ITIL', 'Training & Development', 'QA Testing', 'Workflow Automation'],
  },
  {
    role: 'Helpdesk Student Consultant',
    company: 'Clemson University',
    location: 'Clemson, SC',
    period: 'January 2023 – June 2024',
    bullets: [
      'Routed 4,000+ tickets to appropriate teams after assessing the nature of individual issues, and troubleshot and resolved 2,500+ tickets of varying difficulty.',
      'Provided technical support to students, faculty, and staff via in-person, email, phone, and live chat.',
      'Elevated customer standards with timely resolutions and deep infrastructure expertise.',
      'Developed a comprehensive understanding of all aspects of an organizational IT department to effectively delegate tasks to various teams.',
    ],
    tags: ['Technical Support', 'Ticketing Systems', 'Active Directory', 'Troubleshooting', 'Customer Service'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.5rem, 8vw, 8rem)',
        background: '#0d0d0d',
      }}
    >
      <SectionHeader number="01" title="Work Experience" />

      <div style={{ position: 'relative', marginTop: '3rem' }}>
        {/* Timeline line */}
        <div
          style={{
            position: 'absolute',
            left: '1rem',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, #64ffda, rgba(100,255,218,0.1))',
          }}
        />

        <div style={{ paddingLeft: '3rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                background: '#111827',
                border: '1px solid #1e293b',
                borderRadius: '8px',
                padding: '1.75rem 2rem',
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.35)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(100, 255, 218, 0.08)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1e293b'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.6rem',
                  top: '1.75rem',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#64ffda',
                  border: '2px solid #0d0d0d',
                  boxShadow: '0 0 8px rgba(100,255,218,0.6)',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div>
                  <h3 style={{ color: '#e2e8f0', fontSize: '1.1rem', fontWeight: 600 }}>
                    {exp.role}
                  </h3>
                  <p className="mono" style={{ color: '#64ffda', fontSize: '0.9rem', marginTop: '2px' }}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span
                  className="mono"
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.8rem',
                    background: '#0d0d0d',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    border: '1px solid #1e293b',
                    height: 'fit-content',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.65, listStyleType: 'none', position: 'relative', paddingLeft: '1rem' }}>
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#64ffda',
                        fontFamily: 'monospace',
                      }}
                    >
                      ›
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    className="mono"
                    style={{
                      fontSize: '0.75rem',
                      color: '#64ffda',
                      background: 'rgba(100, 255, 218, 0.07)',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ number, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
      <span className="mono" style={{ color: '#64ffda', fontSize: '1rem', opacity: 0.8 }}>
        {number}.
      </span>
      <h2 style={{ color: '#e2e8f0', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
        {title}
      </h2>
      <div style={{ flex: 1, height: '1px', background: '#1e293b', maxWidth: '300px' }} />
    </div>
  )
}
