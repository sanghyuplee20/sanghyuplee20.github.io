import React from 'react';

const Resume = () => {
  return (
    <div style={{ height: '100vh', textAlign: 'center', backgroundColor: 'black', marginBottom: "40px"}}>
      <h1 style={{ color: 'white', paddingTop: "40px"}}>Resume</h1> {}
      <iframe
        src="/Sanghyup_Lee_Resume.pdf"
        width="36%"
        height="88%" 
        style={{ border: 'none', marginTop: '20px' }} 
        title="Resume"
      />
    </div>
  );
};

export default Resume;
