import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-background"
        animate={{
          x: mousePosition.x * 8,
          y: mousePosition.y * 8,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
        }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          SOFTWARE DEVELOPER · CREATIVE TECHNOLOGIST
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Building
          <br />
          <span>digital experiences.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
        >
          I build web platforms, mobile applications,
          <br />
          and digital products that solve real problems.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >
          <a href="#work" className="hero-button hero-button-primary">
            Explore my work
            <span>↗</span>
          </a>

          <a href="#contact" className="hero-button hero-button-secondary">
            Let's connect
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
      >
        <span>BASED IN MALAWI</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </motion.div>
    </section>
  );
}

export default Hero;