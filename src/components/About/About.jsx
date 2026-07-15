import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <h2 className="section-title">
        About Me
      </h2>

      <div className="about-container">

        <div className="about-image">

          <div className="profile-card">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
            />

            <h3>Kedar</h3>

            <p>React Full Stack Developer</p>

          </div>

        </div>

        <div className="about-content">

          <h3>
            Building Modern Web Applications
          </h3>

          <p>
            I'm a React developer passionate about building
            responsive, scalable and user-friendly web applications.
            I enjoy learning new technologies and creating clean,
            maintainable code.
          </p>

          <div className="about-grid">

            <div className="info-card">
              <h4>Experience</h4>
              <p>8 Months</p>
            </div>

            <div className="info-card">
              <h4>Projects</h4>
              <p>10+</p>
            </div>

            <div className="info-card">
              <h4>Frontend</h4>
              <p>React.js</p>
            </div>

            <div className="info-card">
              <h4>Backend</h4>
              <p>Node.js</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;