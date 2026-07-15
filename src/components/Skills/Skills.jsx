import "./Skills.css";

const skills = [
  { name: "HTML", level: "85%" },
  { name: "CSS", level: "80%" },
  { name: "JavaScript", level: "88%" },
  { name: "React JS", level: "90%" },
  { name: "Node JS", level: "80%" },
  { name: "GraphQL", level: "75%" },
  { name: "MongoDB", level: "68%" },
  { name: "Git & GitHub", level: "85%" }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">
        My Skills
      </h2>

      <p className="skills-subtitle">
        Technologies I use to build modern web applications.
      </p>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="progress">

              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;