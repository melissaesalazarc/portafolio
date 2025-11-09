import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import CanvasScene from "./CanvasScene";
import { motion } from "framer-motion";
import TypewriterBubble from "./TypewriterBubble";


export default function Hero() {
  return (
    <section className="hero hero-landing">

      {/* ✅ NEW — gradient blob background */}
      <div className="gradient-blob"></div>

      {/* Optional THREE.js canvas (super light) */}
      <div className="hero-canvas">
        <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <CanvasScene />
            </Stage>
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
        </Canvas>
      </div>

      {/* CONTENT */}
      <motion.div
        className="hero-content-landing"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-left">
          <h1 className="hero-title">
            Hey There,<br />
            <span className="hero-name">I'm <span className="accent">Tu Nombre</span>!</span>
          </h1>

          <div className="hero-small">
            <h4>Top Rated Designer</h4>
            <p className="hero-sub">
              Diseño sitios hermosos y funcionales que venden ideas y experiencias.
            </p>
          </div>
        </div>

        <div className="hero-right">
          {/* FOTO */}
          <div className="portrait-wrap">
            <img src="/src/assets/me.png" alt="Tu foto" className="portrait" />
          </div>

          {/* BURBUJA TYPING */}
          <TypewriterBubble
            texts={[
              "I design beautiful and functional websites that bring ideas to life.",
              "Frontend · React · 3D · UI/UX",
              "Disponible para freelance y colaboraciones."
            ]}
            typingSpeed={55}
            deletingSpeed={30}
            pauseBetween={1800}
          />
        </div>
      </motion.div>
    </section>
  );
}