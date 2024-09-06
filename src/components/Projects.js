import React from 'react';
import './Projects.css'; // Importing CSS for styling

const projectsData = [
  {
    title: "Trading App",
    description:
      "A full-stack trading application built with React, Node.js, Express.js, and PostgreSQL. The app allows users to trade cards with dynamic price visualizations.",
    liveLink: "https://your-trading-app.com",
    githubLink: "https://github.com/your-github/trading-app",
  },
  {
    title: "Cache Simulation",
    description:
      "A C++ cache simulation that supports write-allocate, no-write-allocate, write-back, and write-through techniques, along with adjustable cache parameters.",
    liveLink: "",
    githubLink: "https://github.com/your-github/cache-simulation",
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
