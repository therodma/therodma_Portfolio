const projects = [
  {
    id: 1,
    title: 'Data Cleaning Tool',
    tags: ['TypeScript', 'Data Science', 'Web App'],
    description:
      'A web-based data cleaning tool that allows users to upload, inspect, and clean datasets directly in the browser. Supports common cleaning operations to prepare data for analysis.',
    github: 'https://github.com/therodma/Data_Cleaning_Tool',
    demo: 'https://therodma.github.io/Data_Cleaning_Tool/',
  },
  {
    id: 2,
    title: 'NBA Lineup Optimizer',
    tags: ['Python', 'Data Science', 'Pandas'],
    description:
      'A Python tool that analyzes NBA player statistics to generate optimized lineups. Uses player performance data to suggest the best possible combinations based on scoring, efficiency, and matchup metrics.',
    github: 'https://github.com/therodma/NBA_Lineup_Optimizer',
    demo: 'https://therodma.github.io/NBA_Lineup_Optimizer',
  },
  {
    id: 3,
    title: 'NBA Winner Prediction',
    tags: ['Python', 'Machine Learning', 'scikit-learn'],
    description:
      'A machine learning model that predicts NBA game outcomes using historical team and player statistics. Applies classification algorithms to identify key performance indicators that drive win probability.',
    github: 'https://github.com/therodma/NBA_Winner_Prediction',
    demo: 'https://therodma.github.io/NBA_Winner_Prediction',
  },
  {
    id: 4,
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
