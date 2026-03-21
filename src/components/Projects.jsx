import { SectionHeader } from './Experience'

const projects = [
  {
    title: 'ServiceNow Catalog Workflows',
    description:
      'Designed and implemented end-to-end Catalog Request workflows in ServiceNow, including front-end intake forms and back-end automation. Used for Identity Verification and Hardware Repair processes across Clemson IT.',
    tags: ['ServiceNow', 'JavaScript', 'Workflow Automation', 'ITIL'],
    status: 'Production',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This website! Built with React and Vite, featuring a 3D interactive sandcastle, responsive design, animated typewriter hero, and modular component architecture.',
    tags: ['React', 'Vite', 'Three.js', 'Tailwind CSS', 'JavaScript'],
    status: 'Live',
    github: '#',
  },
  {
    title: 'Project Coming Soon',
    description:
      'More projects are in the works. Check back soon or reach out to learn more about what I\'m currently building.',
    tags: ['Python', 'C++', 'TBD'],
    status: 'In Progress',
  },
]

const statusColors = {
  Production: '#4aa898',
  Live: '#4aa898',
  'In Progress': '#e88278',
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.5rem, 8vw, 8rem)',
        background: '#f0ece2',
      }}
    >
      <SectionHeader number="03" title="Projects" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              background: '#f8f5f0',
              border: '1px solid #c8d4d0',
              borderRadius: '8px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
              cursor: project.github ? 'pointer' : 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(74, 168, 152, 0.5)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(74, 168, 152, 0.1)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#c8d4d0'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ color: '#5e7d8c', fontSize: '1.75rem', lineHeight: 1, fontFamily: 'monospace', opacity: 0.6 }}>
                {'</>'}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: statusColors[project.status] || '#7a9098',
                    boxShadow: `0 0 6px ${statusColors[project.status] || '#7a9098'}`,
                  }}
                />
                <span className="mono" style={{ fontSize: '0.7rem', color: statusColors[project.status] || '#7a9098' }}>
                  {project.status}
                </span>
              </div>
            </div>

            <h3 style={{ color: '#1e2c34', fontSize: '1.05rem', fontWeight: 600 }}>{project.title}</h3>

            <p style={{ color: '#4a606a', fontSize: '0.875rem', lineHeight: 1.65, flex: 1 }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="mono"
                  style={{
                    fontSize: '0.72rem',
                    color: '#3a9080',
                    background: 'rgba(74, 168, 152, 0.08)',
                    border: '1px solid rgba(74, 168, 152, 0.22)',
                    padding: '0.2rem 0.55rem',
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
    </section>
  )
}
