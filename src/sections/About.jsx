function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-top">
        <p className="section-label">02 — ABOUT</p>

        <p className="about-intro">
          I build digital products where technology,
          design, and real-world problems meet.
        </p>
      </div>

      <div className="about-main">
        <h2>
          Developer
          <span> with a</span>
          <br />
          builder's
          <span> mindset.</span>
        </h2>

        <div className="about-copy">
          <p>
            I'm Nolstan, an Information Technology student
            and software developer based in Malawi.
          </p>

          <p>
            I enjoy turning ideas into real products —
            from web platforms and mobile applications
            to AI-powered tools and connected devices.
          </p>

          <p>
            My strongest area is backend development,
            but I'm increasingly focused on building
            complete digital experiences that feel as
            good as they work.
          </p>
        </div>
      </div>

      <div className="about-details">
        <div className="about-detail">
          <span>LOCATION</span>
          <strong>Malawi</strong>
        </div>

        <div className="about-detail">
          <span>FOCUS</span>
          <strong>Software Development</strong>
        </div>

        <div className="about-detail">
          <span>INTEREST</span>
          <strong>Cyber Security</strong>
        </div>

        <div className="about-detail">
          <span>BUILDING WITH</span>
          <strong>JavaScript · Python · Flutter</strong>
        </div>
      </div>
    </section>
  );
}

export default About;