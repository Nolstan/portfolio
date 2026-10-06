import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

import fadaHouseImage from "../assets/images/projects/fada-house.jpeg";
import budgetAIImage from "../assets/images/projects/budgetai.jpeg";

const projects = [
  {
    number: "01",
    title: "FADA HOUSE",
    category: "STUDENT ACCOMMODATION PLATFORM",
    image: fadaHouseImage,
    description:
      "A student accommodation discovery platform built to help students find housing around universities in Malawi.",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
  },

  {
    number: "02",
    title: "CYCLEWISE",
    category: "MOBILE APPLICATION",
    image: null,
    description:
      "A mobile application designed to help users understand and track their menstrual cycles.",
    tech: ["React Native", "Expo", "Express", "MongoDB"],
  },

  {
    number: "03",
    title: "BUDGETAI",
    category: "AI FINANCE PLATFORM",
    image: budgetAIImage,
    description:
      "An AI-powered monthly budget planner built around local currency and practical financial planning.",
    tech: ["React", "Node.js", "Groq AI", "MongoDB"],
  },
];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 140,
    scale: 0.92,
    rotateX: 8,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Projects() {
  return (
    <section className="projects-section" id="work">
      <motion.div
        className="projects-heading"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.4,
        }}
      >
        <div>
          <p className="section-label">01 — SELECTED WORK</p>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>
        </div>

        <p className="projects-intro">
          A selection of products, experiments, and
          projects I've built while exploring technology
          and solving real problems.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.number}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              delay: index * 0.12,
            }}
            style={{
              perspective: "1200px",
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;