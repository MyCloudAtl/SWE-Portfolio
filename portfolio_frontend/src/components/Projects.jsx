import { Link } from "react-router-dom"
import './Projects.css'
import React, { useState, useEffect } from 'react';
import healthfit from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/Health-Fit.png'
import healthfitmodal from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/Health-Fit-Modal.png'
import healthfitmain from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/Health-Fit-Main.png'
import maintr from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/MainTR.png'
import pagetr from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/PageTR.png'
import welcomexatl from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/WelcomeXATL.png'
import pagexatl from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/PageXATL.png'
import mainxatl from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/MainXATL.png'
import saas from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/Saas.png'

const Projects = () => {
    document.documentElement.style.setProperty('#root', '#F7E9D7');
    return (
        <div className="Projects">
          <header className="Projects-header">
              <h1 className="ProjectsH1">Projects:</h1>
          </header>
          <div className="BTN-holder">
              <h2 className="ProjectsH2">Personnal Projects:</h2>
              <div className="ProjectsItem">
                      <img src={welcomexatl} alt="Project 1" className="ProjectsBTN" />
                      <img src={mainxatl} alt="Project 1" className="ProjectsBTN" />
                      <img src={pagexatl} alt="Project 1" className="ProjectsBTN" />
                      <div className="ProjectsTextbox">
                          <h3>Project: XploreATL</h3>
                      </div>
              </div>
              <div className="ProjectsItem">
                      <img src={maintr} alt="Time Rewind" className="ProjectsBTN" />
                      <img src={pagetr} alt="Time Rewind" className="ProjectsBTN" />
                      <div className="ProjectsTextbox">
                          <h3>Project: Time Rewind</h3>
                      </div>
              </div>
              <h2 className="ProjectsH2">Group Projects:</h2>
              <div className="ProjectsItem">
                      <img src={healthfitmain} alt="Health-Fit" className="ProjectsBTN" />
                      <img src={healthfit} alt="Health-Fit" className="ProjectsBTN" />
                      <img src={healthfitmodal} alt="Health-Fit" className="ProjectsBTN" />
                      <div className="ProjectsTextbox">
                          <h3>Project: Health-Fit</h3>
                      </div>
              </div>
                {/* <img src='' alt="Project 3" className="ProjectsBTN" />
                <img src='' alt="Health-Fit" className="ProjectsBTN" />
                <img src='' alt="Project 4" className="ProjectsBTN" /> */}
              <h2 className="ProjectsH2">Hackathons:</h2>
              <div className="ProjectsItem">
                <img src={saas} alt="Secure SaaS Supply Chains" className="ProjectsBTN" />
                      <div className="ProjectsTextbox">
                          <h3>Coming Soon</h3>
                      </div>
                </div>
                {/* <img src='' alt="Hunger Recipes" className="ProjectsBTN" /> */}
                <p></p>
                
          </div>
          
      </div>
      )
  }
//       <div className="projects">
//         <div>
//             <Navbar />
//           <h1>Projects</h1>
//           <h2>Frontend : Backend : Full Stack : Mobile Development : Database Management</h2>
//           <p>Real-World Applications: Highlight projects that solve real problems or are inspired by real-world scenarios. For example, your travel itinerary project could be a great addition.
// Project Descriptions: Explain each project with a clear description, tech stack used (e.g., React, Django, MongoDB), challenges faced, and how you solved them.
// Code Quality: Ensure your code is clean, readable, and follows best practices. Link to GitHub repos for each project.
// Deployment: Deploy your projects (e.g., on platforms like GitHub Pages, Netlify, Heroku) so recruiters can interact with them.</p>
//           <h3>Launch Date:</h3>
//           <h3>Project name and description.</h3>
//           <h4>screenshots /Urls/Code snippets</h4>
//           <h5>Link to Github (Axios to dynamically fetch your GitHub data), Live link (if deployed).</h5>
//           <h6>Technologies used: (front-end and back-end)</h6>
//           <div className="projects">
//         {/* Create cards for each project */}
//         <div className="project-card">
//           <h2>Project 1</h2>
//           <p>Description of Project 1.</p>
//           <a href="live-link">Live Demo</a>
//           <a href="github-link">GitHub</a>
//         </div>
//         {/* Repeat for other projects */}
//       </div>
//           <p>Description</p>
//         </div>
//       </div>
//     )
//   }
export default Projects  