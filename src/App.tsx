import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Welcome to My Portfolio</h1>
            <section className="project-overview">
                <h2>Project Overview</h2>
                <p>This portfolio showcases my projects and key achievements. Here are some highlights of my work:</p>
            </section>
            <section className="key-achievements">
                <h2>Key Achievements</h2>
                <ul>
                    <li>Successfully led a team of developers to create a full-stack application.</li>
                    <li>Contributed to open-source projects, enhancing my skills in collaboration.</li>
                    <li>Completed advanced courses in React and Node.js.</li>
                </ul>
            </section>
        </div>
    );
};

export default Portfolio;