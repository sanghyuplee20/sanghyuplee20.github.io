import React from 'react';

const Resume = () => {
  return (
    <div style={{ height: '100vh', textAlign: 'center', backgroundColor: 'black' }}>
      <h1 style={{ color: 'white' }}>My Resume</h1>
      <iframe
        src="/Sanghyup_Lee_Resume.pdf"
        width="80%"
        height="80%"
        style={{ border: 'none' }}
        title="Resume"
      />
    </div>
  );
};

export default Resume;
