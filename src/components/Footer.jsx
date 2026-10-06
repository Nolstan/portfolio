function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a href="/" className="footer-logo">
          NOLSTAN<span>.</span>
        </a>

        <p>
          Building digital experiences
          <br />
          from Malawi to the world.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/Nolstan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="#contact">
            Contact ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 NOLSTAN KUMWENDA</span>

        <span>BUILT WITH REACT</span>
      </div>
    </footer>
  );
}

export default Footer;