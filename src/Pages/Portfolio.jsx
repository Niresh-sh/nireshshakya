import Navbar from "../Components/Navbar";
import Home from "../Components/HeroSection";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contacts";
import Footer from "../Components/Footer";
import useInView from '../Components/Useinview';

export default function Portfolio() {
  const [homeRef, homeInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.3 });

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#050b14] text-white">
      <Navbar
        onHome={() => scrollToSection(homeRef)}
        onAbout={() => scrollToSection(aboutRef)}
        onSkills={() => scrollToSection(skillsRef)}
        onProjects={() => scrollToSection(projectsRef)}
        onContact={() => scrollToSection(contactRef)}
      />

      {/* Home Section */}
      <section
        ref={homeRef}
        className={`transition-all duration-1000 ease-out ${
          homeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Home
          onProjects={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          onContact={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className={`transition-all duration-1000 ease-out delay-20 ${
          aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <About />
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className={`transition-all duration-1000 ease-out delay-20 ${
          skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className={`transition-all duration-1000 ease-out delay-30 ${
          projectsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Projects />
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className={`transition-all duration-1000 ease-out delay-30 ${
          contactInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Contact />
        <Footer />
      </section>
    </div>
  );
}
