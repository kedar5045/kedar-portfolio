import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">

      <h2>Kedar</h2>

      <p>
        React Full Stack Developer passionate about building
        scalable and modern web applications.
      </p>

      <div className="social-icons">

        <a href="#">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/kedar-p-034900278/" 
        target="_blank"
         rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="#">
          <FaInstagram />
        </a>

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kedarpcse2024@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <MdEmail />
</a>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Kedar. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;