import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experiences">Experiences</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
