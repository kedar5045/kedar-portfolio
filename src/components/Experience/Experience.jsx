import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">

      <h2 className="section-title">
        Work Experience
      </h2>

      <div className="experience-card">

        <div className="experience-header">

          <div>

            <h3>junior Software Engineer</h3>

            <p className="company">
              Pheonix solutions
            </p>

          </div>

          <span className="year">
            june 2025 - Feb 2026
          </span>

        </div>

        <p className="experience-description">

          Worked on modern web applications using React,
          Node.js, GraphQL and MongoDB , jira 

          Built responsive dashboards, integrated APIs,
          implemented authentication and collaborated with
          the development team to deliver scalable solutions.

        </p>

        <div className="tech-stack">

          <span>React</span>

          <span>Node.js</span>

          <span>GraphQL</span>

          <span>MongoDB</span>

          <span>Git</span>
          <span>jira</span>

        </div>

      </div>

    </section>
  );
};

export default Experience;