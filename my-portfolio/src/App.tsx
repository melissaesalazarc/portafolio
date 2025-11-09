import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";

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
            <Projects />
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
