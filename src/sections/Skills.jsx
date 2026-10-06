const skills = [
  {
    number: "01",
    name: "JavaScript",
    type: "CORE",
  },
  {
    number: "02",
    name: "React",
    type: "FRONTEND",
  },
  {
    number: "03",
    name: "Node.js",
    type: "BACKEND",
  },
  {
    number: "04",
    name: "MongoDB",
    type: "DATABASE",
  },
  {
    number: "05",
    name: "Flutter",
    type: "MOBILE",
  },
  {
    number: "06",
    name: "Python",
    type: "LANGUAGE",
  },
  {
    number: "07",
    name: "Express",
    type: "BACKEND",
  },
  {
    number: "08",
    name: "Git / GitHub",
    type: "TOOLS",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <div>
          <p className="section-label">03 — TOOLKIT</p>

          <h2>
            Things I
            <br />
            <span>build with.</span>
          </h2>
        </div>

        <p className="skills-intro">
          A growing toolkit built through real projects,
          experimentation, coursework, and a lot of
          breaking things.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-number">
              {skill.number}
            </span>

            <div className="skill-content">
              <span className="skill-type">
                {skill.type}
              </span>

              <h3>{skill.name}</h3>
            </div>

            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;