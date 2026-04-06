function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/logo.png" alt="OOUMSA Logo" className="nav-logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="#about">The Candidate</a></li>
        <li><a href="#why">Why Me</a></li>
        <li><a href="#vision">Visionary</a></li>
        <li><a href="#manifesto">Manifesto</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <button className="nav-cta">Join Movement</button>
    </nav>
  )
}

export default Navbar