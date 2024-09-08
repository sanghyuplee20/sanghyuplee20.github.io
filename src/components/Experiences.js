import React from 'react';

const Experiences = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', paddingTop: "40px" }} id="experiences">
            <h1 className="page-title">Experiences</h1>
            <div className="experience-item">
                <h3>Software Engineering Intern - Samsung SDS</h3>
                <p className="experience-date">May 2024 - August 2024</p>
                <p className="experience-description">
                    • Collaborated closely with the RPA Solutions team to implement advanced prompt engineering techniques.<br />
                    • Created and curated 100 sample data sets for use as examples, improving model's applicability and training efficiency.<br />
                    • Generated vectors from chunked data and applied cosine similarity search to enhance query augmentation.
                </p>
            </div>
            <div className="experience-item">
                <h3>Software Developer Intern - Mintech</h3>
                <p className="experience-date">July 2023 - August 2023</p>
                <p className="experience-description">
                    • Created a profile page in a mobile application utilizing the Flutter framework for exercise routine tracking.<br />
                    • Collaborated with Yonsei University's departments, assisting in research for post-colorectal cancer patient exercise routines.
                </p>
            </div>
            <div className="experience-item">
                <h3>Research Assistant - Yonsei University, Fluid Track</h3>
                <p className="experience-date">July 2021 - August 2021</p>
                <p className="experience-description">
                    • Worked on a health tracking application using Unity, making health monitoring more interactive for pediatric patients.
                </p>
            </div>
        </div>
    );
};

export default Experiences;
