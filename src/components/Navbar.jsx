import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/logo.png" alt="OOUMSA Logo" className="nav-logo-img" />
      </div>
      <ul className={`nav-links ${open ? 'nav-open' : ''}`}>
        <li><a href="#about" onClick={() => setOpen(false)}>The Candidate</a></li>
        <li><a href="#why" onClick={() => setOpen(false)}>Why Me</a></li>
        <li><a href="#vision" onClick={() => setOpen(false)}>Visionary</a></li>
        <li><a href="#manifesto" onClick={() => setOpen(false)}>Manifesto</a></li>
        <li><a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a></li>
      </ul>
      <div className="nav-right">
        <button className="nav-cta">Join Movement</button>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar