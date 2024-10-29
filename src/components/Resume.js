import React from 'react';
import './Resume.css'; 


const Resume = () => {
  return (
    <div className="resume-container">
      <h1 style={{ color: 'white' }}>Resume</h1>
      <img
        src="/Sanghyup_Lee_Resume.png"
        alt="Sanghyup Lee's Resume"
        className="resume-image"
      />
      <a href="/Sanghyup_Lee_Resume.pdf" download>
        <button className="download-button">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
