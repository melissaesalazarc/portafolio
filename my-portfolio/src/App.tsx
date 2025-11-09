import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Navbar />

      <main className="scroll-container">
        <section className="snap-section">
          <Hero />
        </section>

        <section className="snap-section">
          <About />
        </section>

        <section className="snap-section">
          <Section id="projects" title="Projects">
            <p>Aquí irán tus proyectos.</p>
          </Section>
        </section>

        <section className="snap-section">
          <Section id="contact" title="Contact">
            <p>Tu formulario o redes sociales.</p>
          </Section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
