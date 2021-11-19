import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="/about" className="About">
            <h1>🚓About Wellness-Shop🚓</h1>
            <h3>"We Care, We am Reliable, We Make a Difference"</h3>
            <div className="d-flex about">
                <img src="https://global.toyota/pages/news/images/2021/04/19/1020/002.jpg" alt="" />
                <p className="mt-5">As a car company, we exist to bring people together. When people come together, they create opportunities for shared experience, dialogue, and growth.Around the world, civil protests against ongoing social injustices continue to highlight the stark inequalities that prevent some people from being empowered participants in these opportunities.As a company, we’ve traditionally stayed out of public debate on social issues; our focus has been on the work of providing a safe, respectful and inclusive work environment for all our people. However, in an atmosphere of heightened awareness and involvement, we believe it’s important to add our voices to the discussion and share our perspective with you.</p>
            </div>
        </div>
    );
};

export default About;