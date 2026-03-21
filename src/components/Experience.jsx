const experiences = [
  {
    role: 'Helpdesk Student Lead / ServiceNow Catalog Administrator',
    company: 'Clemson University',
    location: 'Clemson, SC',
    period: 'June 2024 – Present',
    bullets: [
      'Train new student employees, guiding them on procedure use cases, introducing them to SOPs and other resources.',
      'Maintain and enforce organizational best practices across the student team, ensuring alignment with department standards and IT policies.',
      'Relaying institutional knowledge and collaborating with supervisors to determine best-fit resolutions for non-standard issues.',
      'Assisted with the transition between IT management systems from Cherwell to ServiceNow, with tasks such as beta testing, QA testing, and implementing QOL features, as well as training IT staff across organizational teams.',
      'Architect and maintain front-end intake forms and back-end catalog workflows in ServiceNow, streamlining request intake and improving the end-user experience.',
      'Build, deploy, and maintain automated tests (ATF) for various enterprise services within ServiceNow.',
      'Design and manage reporting dashboards tracking employee performance metrics, ticket record summaries, and live chat statistics.',
    ],
    tags: ['ServiceNow', 'ITIL', 'Training & Development', 'QA Testing', 'Workflow Automation'],
  },
  {
    role: 'Helpdesk Student Consultant',
    company: 'Clemson University',
    location: 'Clemson, SC',
    period: 'January 2023 – June 2024',
    bullets: [
      'Route tickets to appropriate IT teams by accurately diagnosing issue type, urgency, and ownership across a large enterprise environment with 25,000+ students and 5,000+ staff.',
      'Independently resolve tickets of varying complexity, including Windows/macOS troubleshooting, network/WiFi diagnostics, account and identity management (Active Directory, SSO), and software installation and licensing.',
      'Elevate customer standards with timely resolutions and infrastructure expertise.',
      'Deliver technical support to students, faculty, and staff across multiple channels, including in-person, email, phone, and live chat. Maintaining timely resolutions and a high standard of customer service.',
      'Develop a working knowledge of all organizational IT teams and their responsibilities, enabling accurate ticket delegation and cross-functional coordination.',
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
        background: '#f0ece2',
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
            background: 'linear-gradient(to bottom, #4aa898, rgba(74,168,152,0.1))',
          }}
        />

        <div style={{ paddingLeft: '3rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                background: '#f8f5f0',
                border: '1px solid #c8d4d0',
                borderRadius: '8px',
                padding: '1.75rem 2rem',
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(74, 168, 152, 0.5)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(74, 168, 152, 0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#c8d4d0'
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
                  background: '#4aa898',
                  border: '2px solid #f0ece2',
                  boxShadow: '0 0 8px rgba(74,168,152,0.5)',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div>
                  <h3 style={{ color: '#1e2c34', fontSize: '1.1rem', fontWeight: 600 }}>
                    {exp.role}
                  </h3>
                  <p className="mono" style={{ color: '#4aa898', fontSize: '0.9rem', marginTop: '2px' }}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span
                  className="mono"
                  style={{
                    color: '#5e7d8c',
                    fontSize: '0.8rem',
                    background: '#f0ece2',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    border: '1px solid #c8d4d0',
                    height: 'fit-content',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ color: '#4a606a', fontSize: '0.95rem', lineHeight: 1.65, listStyleType: 'none', position: 'relative', paddingLeft: '1rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#4aa898', fontFamily: 'monospace' }}>›</span>
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
                      color: '#3a9080',
                      background: 'rgba(74, 168, 152, 0.08)',
                      border: '1px solid rgba(74, 168, 152, 0.25)',
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
      <span className="mono" style={{ color: '#e88278', fontSize: '1rem', opacity: 0.9 }}>
        {number}.
      </span>
      <h2
        className="cinzel"
        style={{ color: '#1e2c34', fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)', fontWeight: 700, letterSpacing: '0.03em' }}
      >
        {title}
      </h2>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, #c8d4d0, transparent)', maxWidth: '300px' }} />
    </div>
  )
}
