// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import socialLinks from "../../constants/socialLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Ji Min Lee
        </Link>
        <button className="nav-toggle" onClick={handleToggleMenu}>
          ☰
        </button>
        <ul className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <a href={socialLinks.blog} className="nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="./src/assets/images/me.png" className="nav-link" download onClick={() => setIsMenuOpen(false)}>
              Resume
            </a>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/test" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              API Test
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
