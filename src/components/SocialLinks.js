// src/components/SocialLinks.js
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import socialLinks from "../constants/socialLinks";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link">
        <FaLinkedin size={30} />
      </a>
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link">
        <FaGithub size={30} />
      </a>
      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="social-link">
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;
