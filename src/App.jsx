import Navbar from "./components/Navbar/Navbar/navbar";
import Hero from "./components/Navbar/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
      <>
      <Navbar />
       <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience/>
        <Contact/>
        <Footer/>

        
        <>
  {/* Your existing components */}

  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    theme="dark"
  />
</>
      
    </>
    
  );

}

export default App;