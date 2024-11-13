// src/components/SocialLinks.js
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/masibasi" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link">
        <FaGithub size={30} />
      </a>
      <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-link">
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;
