import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import Navbar from './components/Navbar'; // Import your Navbar component
import './App.css';


function App() {
  return (
    <Router>
      {/* Include the Navbar above the Routes */}
      <Navbar />
      <Routes>
        {/* Redirect from the root path "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Define the /home route for the Home component */}
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
