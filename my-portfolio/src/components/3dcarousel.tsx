import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./3dcarousel.css";

export default function ThreeDCarousel() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [direction, setDirection] = useState(1); 
  const [isHovering, setIsHovering] = useState(false);

  const speed = 0.35; // ✅ más lento, más suave

  const projects = [
    {
      title: "Rediseño de Plataforma de Gestión",
      company: "NovaTech",
      description:
        "UI/UX + frontend para una plataforma moderna enfocada en interacción emocional y accesibilidad.",
      image: "/src/assets/me2.png",
      url: "#",
    },
    {
      title: "E-commerce Minimalista",
      company: "Lumina",
      description:
        "Experiencia clean con microinteracciones, visual design y arquitectura intuitiva.",
      image: "/src/assets/me2.png",
      url: "#",
    },
    {
      title: "Dashboard Analítico",
      company: "DataFlow",
      description:
        "Dashboard con visualizaciones avanzadas, dark mode y storytelling visual.",
      image: "/src/assets/me2.png",
      url: "#",
    },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const wrapper = wrapperRef.current;

    if (!slider || !wrapper) return;

    const totalWidth = slider.scrollWidth / 2;

    const animate = () => {
      if (!isHovering) {
        slider.scrollLeft += direction * speed;

        // ✅ Loop perfecto sin vibraciones
        if (slider.scrollLeft >= totalWidth) {
          slider.scrollLeft = 0;
        }
        if (slider.scrollLeft <= 0) {
          slider.scrollLeft = totalWidth;
        }
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // ✅ Detectar lado derecho/izquierdo
    const moveHandler = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;

      if (x < rect.width / 2) {
        setDirection(-1);
      } else {
        setDirection(1);
      }
    };

    wrapper.addEventListener("mousemove", moveHandler);
    wrapper.addEventListener("mouseenter", () => setIsHovering(true));
    wrapper.addEventListener("mouseleave", () => setIsHovering(false));

    return () => {
      wrapper.removeEventListener("mousemove", moveHandler);
    };
  }, [direction, isHovering]);

  return (
    <div className="carousel-wrapper" ref={wrapperRef}>
      <div className="carousel-track" ref={sliderRef}>
        {[...projects, ...projects].map((p, i) => (
          <motion.div
            key={i}
            className="carousel-card"
            whileHover={{
              rotateX: 12,
              rotateY: -12,
              scale: 1.08,
              transition: { duration: 0.25 },
            }}
          >
            <div className="carousel-img-wrap">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="carousel-info">
              <h3>{p.title}</h3>
              <p className="company">{p.company}</p>
              <p className="desc">{p.description}</p>

              <a className="btn-c" href={p.url} target="_blank">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
