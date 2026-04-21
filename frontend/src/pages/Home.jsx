import { Link } from 'react-router-dom'

const skills = [
  { label: 'Languages', items: 'Python, JavaScript, Java, C++' },
  { label: 'Frontend', items: 'React, HTML, CSS' },
  { label: 'Backend', items: 'Flask, Node.js, REST APIs' },
  { label: 'Tools', items: 'Git, VS Code, Linux' },
  { label: 'Data', items: 'Pandas, NumPy, SQL' },
  { label: 'Concepts', items: 'Algorithms, OOP, ML Basics' },
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Roderick Ma</h1>
        <p className="subtitle">B.S. Data Science &nbsp;·&nbsp; University of California, Merced</p>
        <p className="bio">
          I am a data science student at UC Merced with a focus on data analytics, statistical modeling, and deriving
          actionable insights from complex datasets. I am actively seeking roles in data analytics, business intelligence,
          and statistics where I can apply my quantitative and programming skills.
        </p>
        <div className="hero-links">
          <Link to="/projects">View Projects →</Link>
          <a href="mailto:roderickma@ucmerced.edu">roderickma@ucmerced.edu</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/roderick-ma/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <section>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map(s => (
            <div className="skill-group" key={s.label}>
              <h4>{s.label}</h4>
              <p>{s.items}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
