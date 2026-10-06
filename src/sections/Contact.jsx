function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-top">
        <p className="section-label">04 — CONTACT</p>

        <p className="contact-status">
          AVAILABLE FOR OPPORTUNITIES
        </p>
      </div>

      <div className="contact-main">
        <p className="contact-eyebrow">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let's build
          <br />
          <span>something.</span>
        </h2>

        <a
          href="mailto:nolstankumwenda@gmail.com"
          className="contact-email"
        >
          <span>Get in touch</span>
          <span className="contact-arrow">↗</span>
        </a>
      </div>

      <div className="contact-bottom">
        <div>
          <span>BASED IN</span>
          <strong>Malawi</strong>
        </div>

        <div>
          <span>OPEN TO</span>
          <strong>Internships · Freelance · Collaborations</strong>
        </div>
      </div>
    </section>
  );
}

export default Contact;