import { useRef } from "react";

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -4;
    const rotateY = ((x / rect.width) - 0.5) * 4;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <article
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-visual">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
          />
        ) : (
          <div className="project-preview">
            <span>{project.title}</span>
          </div>
        )}

        <div className="project-overlay" />

        <div className="project-number">
          {project.number}
        </div>

        <div className="project-arrow">
          ↗
        </div>

        <div className="project-cursor-glow" />
      </div>

      <div className="project-info">
        <div>
          <p className="project-category">
            {project.category}
          </p>

          <h3>{project.title}</h3>
        </div>

        <p className="project-description">
          {project.description}
        </p>
      </div>

      <div className="project-tech">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;