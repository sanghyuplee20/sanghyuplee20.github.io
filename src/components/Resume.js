import React from 'react';

const Resume = () => {
  return (
    <div style={{ height: '100vh', textAlign: 'center', backgroundColor: 'black', marginBottom: "40px"}}>
      <h1 style={{ color: 'white', paddingTop: "40px"}}>Resume</h1> {/* Add some margin here */}
      <iframe
        src="/Sanghyup_Lee_Resume.pdf"
        width="36%"
        height="88%" /* Reduce height so the iframe doesn't overlap the title */
        style={{ border: 'none', marginTop: '20px' }} /* Add margin here for spacing */
        title="Resume"
      />
    </div>
  );
};

export default Resume;
