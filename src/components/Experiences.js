import React from 'react';

const Experiences = () => {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: 'black', color: 'white' }} id="experiences">
      <h1>Experiences</h1>
      <div style={{ margin: '20px 0' }}>
        <h3>Teaching Assistant - Johns Hopkins University</h3>
        <p>
          Aug 2023 - Present <br />
          • Assisted students in understanding probability concepts and solving complex problems.<br />
          • Conducted office hours, review sessions, and grading assignments to support student success.
        </p>
      </div>
      <div style={{ margin: '20px 0' }}>
        <h3>Simulation Engineer Intern - Samsung SDI</h3>
        <p>
          June 2022 - Aug 2022 <br />
          • Worked on the Digital Twin project within the Simulation Team.<br />
          • Developed simulation models to optimize production processes and increase efficiency.
        </p>
      </div>
      <div style={{ margin: '20px 0' }}>
        <h3>Side Projects and Hackathons</h3>
        <p>
          • Developed various side projects including a trading application and interactive 3D applications using React and Three.js.<br />
          • Participated in hackathons such as the Patient Safety Technology Challenge, focusing on building solutions that improve patient care and safety.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
