import React from 'react';

const Experiences = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', paddingTop: "40px" }} id="experiences">
            <h1 className="page-title">Experiences</h1>
            <div className="experience-item">
                <h3>Quest2Learn</h3>
                <p className="experience-date">September 2024 - Present</p>
                <p className="experience-description">
                    • Developed virtual labs using React and React 3 Fiber, integrating generative AI to create adaptive learning experiences.<br />
                    • Collaborated to pilot virtual labs with 400+ students at Johns Hopkins University and other institutions.<br />
                    • Designed and animated interactive 3D models using Three.js, transforming virtual labs into immersive environments.
                </p>
            </div>
            <div className="experience-item">
                <h3>Delineo Disease Modeling</h3>
                <p className="experience-date">September 2024 - Present</p>
                <p className="experience-description">
                    • Leveraged SafeGraph data with NumPy and Pandas to model disease spread in rural areas.<br />
                    • Implemented DBSCAN and K-means clustering to study movement across households and locations over 30 days.<br />
                    • Partnered with WHO, Ruvos, NTT Data, and AWS to scale the model into a global pandemic decision-support tool.
                </p>
            </div>
            <div className="experience-item">
                <h3>Samsung SDS</h3>
                <p className="experience-date">June 2024 - August 2024</p>
                <p className="experience-description">
                    • Applied Few-Shot Prompting, Prompt Chaining, and Chain of Thought prompting using Python and LangChain.<br />
                    • Curated 200+ sample datasets for API and RPA integration, improving model training.<br />
                    • Generated 100+ Hugging Face vector embeddings and applied cosine similarity search to optimize query augmentation accuracy.
                </p>
            </div>
            <div className="experience-item">
                <h3>Mintech</h3>
                <p className="experience-date">July 2023 - August 2023</p>
                <p className="experience-description">
                    • Designed a profile page in a mobile app using Flutter, enabling users to monitor progress and earn achievements.<br />
                    • Collaborated with Yonsei University’s Physical Education and Computer Science departments to improve post-colorectal cancer patient care.<br />
                    • Optimized algorithm design to personalize exercise routines for patient rehabilitation.
                </p>
            </div>
        </div>
    );
};

export default Experiences;
