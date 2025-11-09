import { motion } from "framer-motion";
import AnimatedBlob from "./AnimatedBlob";
import TypewriterBubble from "./TypewriterBubble";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">

      {/* BLOB ANIMADO */}
      <AnimatedBlob />

      {/* TEXTOS IZQUIERDA */}
      <div className="hero-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey There,<br />
          <span className="highlight">I'm Melissa!</span>
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="subtext"
        >
          Top Rated Designer
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="desc"
        >
          Diseño sitios hermosos y funcionales que venden ideas y experiencias.
        </motion.p>

        <div className="socials">
          ✅ iconos aquí luego
        </div>
      </div>

      {/* FOTO + GLOBITO */}
      <div className="hero-right">
        <img
          src="/src/assets/me.png"
          alt="yo"
          className="hero-photo"
        />

        <TypewriterBubble texts={["Disponible para freelance y colaboraciones"]} />
      </div>

    </section>
  );
};

export default Hero;
