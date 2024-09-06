import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
