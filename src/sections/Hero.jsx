import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import HeroOrb from "../components/three/HeroOrb";


function MagneticButton({ children, href, primary = false }) {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `
      translate(${x * 0.18}px, ${y * 0.18}px)
    `;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`hero-button ${
        primary
          ? "hero-button-primary"
          : "hero-button-secondary"
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [typedText, setTypedText] = useState("");
  const [isAltFont, setIsAltFont] = useState(false);

  useEffect(() => {
    const defaultText = "digital experiences.";
    const alternateText = "digital experiences.";

    let currentText = "";
    let phase = 0;
    let timeoutId;

    const tick = () => {
      if (phase === 0) {
        currentText = defaultText.slice(0, currentText.length + 1);
        setTypedText(currentText);
        setIsAltFont(false);

        if (currentText.length < defaultText.length) {
          timeoutId = setTimeout(tick, 90);
          return;
        }

        phase = 1;
        timeoutId = setTimeout(tick, 1200);
        return;
      }

      if (phase === 1) {
        currentText = defaultText.slice(0, currentText.length - 1);
        setTypedText(currentText);
        setIsAltFont(false);

        if (currentText.length > 0) {
          timeoutId = setTimeout(tick, 60);
          return;
        }

        phase = 2;
        timeoutId = setTimeout(tick, 250);
        return;
      }

      if (phase === 2) {
        currentText = alternateText.slice(0, currentText.length + 1);
        setTypedText(currentText);
        setIsAltFont(true);

        if (currentText.length < alternateText.length) {
          timeoutId = setTimeout(tick, 90);
          return;
        }

        phase = 3;
      }
    };

    timeoutId = setTimeout(tick, 400);

    return () => clearTimeout(timeoutId);
  }, []);

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
      <HeroOrb />
      
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
          <span className={`hero-typed-text ${isAltFont ? "hero-typed-alt" : ""}`}>
            {typedText}
            <span className="hero-cursor">|</span>
          </span>
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
          <MagneticButton href="#work" primary>
            Explore my work
            <span>↗</span>
          </MagneticButton>

          <MagneticButton href="#contact">
            Let's connect
          </MagneticButton>
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