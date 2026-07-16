import "./Projects.css";
import Portfolio from "../../assets/portfolio.png";
import Calculator from "../../assets/calculator.png";

const projects = [
  {
    title: "School Management System",
    liveLink:"",
    description:
      "A complete school management dashboard built using React. It includes student management, teacher management, classes, admissions, and enquiry modules.",
    tech: "React • CSS • Material UI • Node.js • MongoDB"
  },
  {
    title: "currency converter",
    liveLink:"https://kedar5045.github.io/currency-converter/",
    image:Calculator,
    description:
      "A calculator made using api made to understand the fetch api concept ,made using real time api shows currency value for the current year",
    tech: "HTML. CSS. javascript"
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A modern responsive portfolio showcasing projects, skills, and experience with animations and responsive layouts.",
    tech: "React • CSS • Framer Motion"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <h2 className="section-title">Projects</h2>

      <p className="project-subtitle">
        Some of the projects I've built.
      </p>

      <div className="project-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.tech}</small>

              <div className="project-buttons">

                {project.liveLink && (
  <button
    onClick={() => window.open(project.liveLink, "_blank")}
  >
    Live Demo
  </button>
)}


                <button className="github-btn">
                  GitHub
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;
