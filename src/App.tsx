import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MainNav from "./components/nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/skills";
import Project from "./components/projects";
function App() {
  return (
    <div className="body bg-body-tertiary" style={{paddingTop: 70}}>
      <MainNav />

      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects"><Project /></section>
      <Footer />
    </div>
  );
}

export default App;
