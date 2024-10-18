import React from 'react';
import './Projects.css'; // Importing CSS for styling
import rareTradesImage from '../images/RareTrades.png'; // Import the image

const projectsData = [
    {
      title: "RareTrades",
      description:
        "A full-stack card trading application built with React, Node.js, Express.js, and PostgreSQL. The app allows users to trade cards with dynamic price visualizations.",
      image: rareTradesImage, // Add the image to the project data
    },
  ];
  
  const Projects = () => {
    return (
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;