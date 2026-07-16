import "./navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  useEffect(() => {
  const handleScroll = () => {
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection,setActiveSection]=useState("home");
  return (
    <header className="navbar">
      <div className="logo">
        <span>Kedar</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home"
          className={activeSection === "home"?"active":""}>Home
            </a></li>
          <li><a href="#about"
          className={activeSection==="about"?"active":""}>About</a></li>
          <li><a href="#skills"className={activeSection==="skills"?"active":""}>Skills</a></li>
          <li><a href="#projects"className={activeSection==="projects"?"active":""}>Projects</a></li>
          <li><a href="#contact"className={activeSection==="contact"?"active":""}>Contact</a></li>
        </ul>
      </nav>

      
      <a href="/public/Resume.pdf"
      download="Resume.pdf">
        Resume
      </a>
     
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>
    </header>
  );
};

export default Navbar;