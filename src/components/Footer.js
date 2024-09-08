import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/sanghyuplee20" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/sanghyup-lee-39059020a/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
