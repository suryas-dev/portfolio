import React from 'react';
import './Projects.css'; // Import the CSS file

const projects = [
  {
    title: 'Moto Care Service Backend',
    description: 'Developed the Moto Care service backend using Java and object-oriented principles on the Google Cloud Platform, enabling device analytics and usage-based recommendations for Motorola agents.',
    responsibilities: [
      'Developed and optimized Angular 15 applications, utilizing TypeScript for complex data visualization and operational functionalities.',
      'Integrated RESTful APIs with front-end applications, ensuring seamless communication and performance.',
      'Implemented asynchronous code patterns, including Promises and Event Loops, to enhance application responsiveness and user experience.',
      'Utilized JS tooling such as ESLint and Webpack to streamline development processes and maintain code quality.',
      'Successfully migrated a critical web application from webapp2 to the Flask framework, resulting in a 30% performance improvement.',
      'Implemented controllers and API proxies using Python scripting with SQL Alchemy for efficient data processing.',
      'Designed and implemented the API layer in the cloud client application, which provides services like identity, access, single sign-on, and cloud-based settings to other Motorola apps.',
      'Managed application deployments and oversaw application management within Google Cloud Platform (GCP).',
      'Served as the primary technical contact directly communicating with business teams to deliver solutions and development.',
      'Received commendations for resolving complex issues and ensuring continuous functionality and user satisfaction.'
    ],
    date: 'Sep 2023 - Present'
  },
  {
    title: 'Spend Track Application',
    description: 'Led the development of a modular interface for the Spend Track application, an end-to-end credit card management service.',
    responsibilities: [
      'Migrated the legacy application from AngularJS to Angular 13, improving load time by 30% and reducing technical debt.',
      'Applied responsive design principles using Angular for consistent user experiences across devices.',
      'Utilized Docker for containerization and GitLab CI/CD pipelines for automated deployments.',
      'Addressed UI/UX challenges to maintain a robust and user-friendly interface.',
      'Participated in incident response activities to ensure application reliability and uptime.',
      'Mentored and guided junior developers, enhancing their technical skills and contributing to overall team productivity and code quality.',
      'Automated testing using Mocha and Jasmine, achieving high code coverage and ensuring reliability across deployments.',
      'Applied advanced Git techniques for version control, including branching strategies and conflict resolution.'
    ],
    date: 'Feb 2022 - Aug 2023'
  },
  {
    title: 'Enterprise-Level Applications',
    description: 'Designed and developed enterprise-level applications using Angular and TypeScript.',
    responsibilities: [
      'Developed UI components for data visualization, ensuring operational functionality and user engagement.',
      'Integrated RESTful web services with Windows applications and server-side APIs.',
      'Created cross-browser compatible layouts using CSS, ensuring consistent performance across different platforms.',
      'Utilized Karma for unit testing Angular applications, ensuring code reliability and quality.',
      'Managed deployments and monitored application issues, resolving problems to maintain optimal performance.',
      'Enhanced development workflows using automation tools like Grunt and Gulp.',
      'Utilized browser developer tools for debugging, performance optimization, and rapid prototyping.'
    ],
    date: 'May 2018 - Jan 2022'
  },
  {
    title: 'Single-Page Responsive Web Applications',
    description: 'Developed single-page responsive web applications using React, implementing ES6 features and Webpack for module bundling.',
    responsibilities: [
      'Built reusable UI components with React and Styled Components for consistent design across the application.',
      'Used React Router for SPA development, enabling seamless navigation and user experience.',
      'Developed web services using RESTful methods, integrating APIs with the front end for smooth data exchange.',
      'Demonstrated technical proficiency in engineering dynamic and interactive web pages.',
      'Ensured usability and accessibility standards compliance, delivering a user-friendly and accessible web experience.'
    ],
    date: 'Mar 2018 - May 2018'
  }
];

const Projects = () => (
  <div className="projects-container">
    <h1>My Projects</h1>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className="project-responsibilities">
              <strong>Responsibilities:</strong>
              {project.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <p className="project-date"><strong>Date:</strong> {project.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;