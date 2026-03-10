import { SectionHeader } from './Experience'

const projects = [
  {
    title: 'ServiceNow Catalog Workflows',
    description:
      'Designed and implemented end-to-end Catalog Request workflows in ServiceNow, including front-end intake forms and back-end automation. Used for Identity Verification and Hardware Repair processes across Clemson IT.',
    tags: ['ServiceNow', 'JavaScript', 'Workflow Automation', 'ITIL'],
    type: 'work',
    status: 'Production',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This website! Built with React and Vite, featuring a dark tech aesthetic, responsive design, animated typewriter hero, and modular component architecture.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    type: 'personal',
    status: 'Live',
    github: '#',
  },
  {
    title: 'Project Coming Soon',
    description:
      'More projects are in the works. Check back soon or reach out to learn more about what I\'m currently building.',
    tags: ['Python', 'C++', 'TBD'],
    type: 'wip',
    status: 'In Progress',
  },
]

const statusColors = {
  Production: '#64ffda',
  Live: '#64ffda',
  'In Progress': '#f59e0b',
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.5rem, 8vw, 8rem)',
        background: '#0d0d0d',
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
              background: '#111827',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
              cursor: project.github ? 'pointer' : 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.35)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(100, 255, 218, 0.08)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#1e293b'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Card header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span
                style={{
                  color: '#64ffda',
                  fontSize: '1.75rem',
                  lineHeight: 1,
                  fontFamily: 'monospace',
                  opacity: 0.7,
                }}
              >
                {'</>'}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: statusColors[project.status] || '#94a3b8',
                    boxShadow: `0 0 6px ${statusColors[project.status] || '#94a3b8'}`,
                  }}
                />
                <span
                  className="mono"
                  style={{
                    fontSize: '0.7rem',
                    color: statusColors[project.status] || '#94a3b8',
                  }}
                >
                  {project.status}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600 }}>
              {project.title}
            </h3>

            {/* Description */}
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.65, flex: 1 }}>
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="mono"
                  style={{
                    fontSize: '0.72rem',
                    color: '#64ffda',
                    background: 'rgba(100, 255, 218, 0.07)',
                    border: '1px solid rgba(100, 255, 218, 0.15)',
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
