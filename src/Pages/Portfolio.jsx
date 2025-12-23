import { useRef } from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/HeroSection";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contacts";
import Footer from "../Components/Footer";

export default function Portfolio() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navbar
        onHome={() => scrollToSection(homeRef)}
        onAbout={() => scrollToSection(aboutRef)}
        onSkills={() => scrollToSection(skillsRef)}
        onProjects={() => scrollToSection(projectsRef)}
        onContact={() => scrollToSection(contactRef)}
      />

      <section ref={homeRef}>
        <Home
          onProjects={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          onContact={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={skillsRef}>
        <Skills />
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={contactRef}>
        <Contact />
        <Footer />
      </section>
    </>
  );
}
