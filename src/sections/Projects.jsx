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

function Projects() {
  return (
    <section className="projects-section" id="work">
      <div className="section-heading">
        <div>
          <p className="section-label">SELECTED WORK</p>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>
        </div>

        <p className="section-intro">
          A collection of products, experiments and digital
          experiences I've designed and developed.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;