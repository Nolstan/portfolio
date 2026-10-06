function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        NOLSTAN<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-cta">
        Let's talk
      </a>
    </nav>
  );
}

export default Navbar;