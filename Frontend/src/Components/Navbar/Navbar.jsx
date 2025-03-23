import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Logo</h1>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </li>
        <li>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
        </li>
        <li>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
