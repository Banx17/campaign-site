function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">OOUMSA ELECTION</div>
      <ul className="nav-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#vision">Vision</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#why">Why Me</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <button className="nav-cta">Join Movement</button>
    </nav>
  )
}

export default Navbar