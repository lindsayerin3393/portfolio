import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import JobExperience from "./components/JobExperience";
import Contact from "./components/Contact";

function App() {
  return (
    <div background="maroon">
      <Navbar />
      <AboutMe />
      <Skills />
      <JobExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
