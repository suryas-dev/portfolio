import React from 'react';
import './About.css'; // Import the CSS file

const About = () => (
  <div className="about-page about-container">
    <h1>About Me</h1>
    <p>
      I am a software engineer with over 6 years of experience, specializing in Angular, React, JavaScript, and TypeScript. 
      I build customer-focused solutions and ensure code runs efficiently. 
      I have worked on projects across telecommunications, financial services, e-commerce, and large enterprise systems.
    </p>
    <h2>Skills</h2>
    <div className="skills-section">
      <div className="skill-category">
        <h3>Front-End 🌐</h3>
        <p>HTML5, CSS, TypeScript, Angular, React, Bootstrap, SASS, Tailwind</p>
      </div>
      <div className="skill-category">
        <h3>Languages 💻</h3>
        <p>JavaScript, TypeScript, Python, C#</p>
      </div>
      <div className="skill-category">
        <h3>Frameworks 🛠️</h3>
        <p>AngularJS, Angular, React, Node.js, Flask</p>
      </div>
      <div className="skill-category">
        <h3>Web Services 🌐</h3>
        <p>RESTful, SOAP</p>
      </div>
      <div className="skill-category">
        <h3>Databases 🗄️</h3>
        <p>MySQL, MongoDB, Cloud SQL, PL/SQL</p>
      </div>
      <div className="skill-category">
        <h3>Version Control & CI/CD 🔄</h3>
        <p>Git, SVN, Jenkins, GitLab, Docker, Azure DevOps</p>
      </div>
      <div className="skill-category">
        <h3>Cloud ☁️</h3>
        <p>GCP, AWS, Azure</p>
      </div>
      <div className="skill-category">
        <h3>Tools 🛠️</h3>
        <p>VS Code, WebStorm, JIRA, Postman, Jasmine, Karma, Protractor, Mocha, Selenium, Chrome Dev Tools</p>
      </div>
      <div className="skill-category">
        <h3>Soft Skills 🤝</h3>
        <p>Communication, Collaboration, Problem-Solving</p>
      </div>
    </div>
  </div>
);

export default About;