import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import Navbar from './components/Navbar'; // Import your Navbar component
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Include the Navbar above the Routes */}
        <Navbar />
        
        {/* Content wrapper */}
        <div className="content">
          <Routes>
            {/* Redirect from the root path "/" to "/home" */}
            <Route path="/" element={<Navigate to="/home" />} />
            {/* Define the /home route for the Home component */}
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
