import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div
  className="hero-left"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
        <p className="hero-greeting">👋 Hello, I'm</p>

        <h1 className="hero-title">
  Hi, I'm <span>Kedar</span>
</h1>

        <h2 className="hero-subtitle">
          React Full Stack Developer
        </h2>

        <p className="hero-description">
          Passionate React developer with experience building responsive,
          scalable web applications using React, Node.js, GraphQL, and
          MongoDB. I enjoy creating clean UI and solving real-world problems.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            View Projects
          </button>

          <a
  href="/public/Resume.pdf"
  download="Resume.pdf"
  className="secondary-btn"
>
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
  className="hero-right"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Developer"
        />
      </motion.div>
    </section>
  );
};

export default Hero;