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
          Hi,<br />
          <span className="highlight">I'm Melissa"</span>
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="subtext"
        >
          Frontend • UX/UI 
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="desc"
        >
          I turn ideas into seamless digital experiences through intuitive design and clean, efficient code.
        </motion.p>

        <div className="socials">
          ✅ iconos aquí luego
        </div>
      </div>

      {/* FOTO + GLOBITO */}
      <div className="hero-right">
        <div className="hero-right">
  <img src="/src/assets/me.png" alt="yo" className="hero-photo" />

  <div className="bubble-wrapper">
    <TypewriterBubble texts={["Crafting interfaces that look good and feel even better."]} />
  </div>
</div>
</div>

    </section>
  );
};

export default Hero;
