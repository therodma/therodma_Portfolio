const projects = [
  {
    id: 1,
    title: 'Distributed Task Scheduler',
    tags: ['Python', 'Distributed Systems', 'Flask'],
    description:
      'A lightweight distributed task scheduling system that assigns jobs across worker nodes using a round-robin algorithm. Supports task queuing, failure recovery, and a REST API for job submission.',
    github: 'https://github.com/',
    demo: null,
  },
  {
    id: 2,
    title: 'Campus Event Finder',
    tags: ['React', 'Node.js', 'MongoDB'],
    description:
      'A full-stack web application for UC Merced students to discover and RSVP to campus events. Features real-time filtering by category, date, and location with a responsive UI.',
    github: 'https://github.com/',
    demo: null,
  },
  {
    id: 3,
    title: 'ML Sentiment Classifier',
    tags: ['Python', 'scikit-learn', 'NLP'],
    description:
      'A text sentiment classifier trained on product reviews using TF-IDF vectorization and a logistic regression model. Achieves 89% accuracy on the test set.',
    github: 'https://github.com/',
    demo: null,
  },
  {
    id: 4,
    title: 'Pathfinding Visualizer',
    tags: ['JavaScript', 'React', 'Algorithms'],
    description:
      'An interactive browser-based tool that visualizes Dijkstra\'s, A*, and BFS pathfinding algorithms on a user-editable grid. Built to deepen understanding of graph traversal.',
    github: 'https://github.com/',
    demo: null,
  },
]

export default function Projects() {
  return (
    <main>
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">A selection of academic and personal software projects.</p>
      <div className="projects-list">
        {projects.map(p => (
          <div className="project-card" key={p.id}>
            <h3>{p.title}</h3>
            <div className="tags">
              {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <p>{p.description}</p>
            <div className="project-links">
              {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub →</a>}
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live Demo →</a>}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
