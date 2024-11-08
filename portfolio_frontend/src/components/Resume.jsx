import React, {useState} from 'react';
import { Link } from "react-router-dom"
import './Resume.css'
import ResumePDF from '../assets/MMSWE.pdf'

const Resume = () => {

    return (
      <div className="Resume">
           <header className="Resume-header">
        <h1 className="ResumeH1">Megan Mashburn</h1>
        <p>Address: Atlanta, GA / <b>Open to Relocate</b></p>
      </header>
      <a href={ResumePDF} download="Megan Mashburn SWE Resume.pdf">
        <button>Download Resume</button>
      </a>

      {/* <button onClick={handlePrint} className="print-button">Print Resume</button> */}
      <section className="Contact-section">
        <h2 className="ResumeH2">Contact:</h2>
        <div className="Contact-box">
          <p>Phone: (706) 455-7075 <br/>
            Send Email: <a href="mailto:megandmashburn@gmail.com">megandmashburn@gmail.com</a><br/></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/megan-m-075598194" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/MeganMashburn
        </a></p>

        </div>
      </section>

      <section className="resume-section">
        <h2 className="ResumeH2">Technical Skills:</h2>
        <div className="Resume-item">
          <ul>
            <li><b>Front-End:</b> HTML, CSS, JavaScript (ES6+), React (Hooks: useState, useEffect, useContext, useNavigate), Axios, Responsive Design (Mobile First, Flexbox, Grid), Bootstrap</li>
            <li><b>Back-End:</b> Express.js, Node.js, Django, Python, RESTful APIs, Mongoose, SQL, MongoDB(NoSQL)</li>
            <li><b>Tools:</b> Version Control (Git), GitHub, Trello, Slack, Figma, Zoom</li>
            <li><b>Concepts:</b> MVC Architecture, Responsive Design, Component Lifecycle, Props, Unidirectional Data Flow, Full CRUD Operations, ORM, DOM Manipulation, ERD, Component Hierarchy Diagrams, Web Performance Optimization</li>
          </ul>
        </div>
      </section>  

      <section className="resume-section">
        <h2 className="ResumeH2">Projects:</h2>

        <div className="Resume-item">
          <h4 className="ResumeH3"><u>Project Title: React Portfolio</u></h4>
          <p className="date">Sep 2024 - Oct 2024</p>
          <h5 className="ResumeH4"><span className="location-font-weight">Technologies Used:</span></h5>
          <ul>
            <li><b>Frontend:</b> Bootstrap, CSS3, HTML5, JavaScript(ES6+), React.js, Vite, React Router, React Hooks (useState, useEffect)</li>
            <li><b>Backend:</b> Body-Parser, CORS, Express.js, Morgan, Node.js</li>
          </ul>
          <h5 className="ResumeH4"><span className="location-font-weight">Key Features:</span></h5>
          <ul>
            <li>Developed a fully responsive professional portfolio featuring modern design with intuitive navigation.</li>
            <li>Enhanced user experience with animations via Framer Motion, adding engaging transitions and effects to components.</li>
            <li>Incorporated a contact form for easy communication using EmailJS and backend APIs for form submission.</li>
            <li>Utilized React Router for seamless navigation between different sections of the portfolio.</li>
          </ul>
        </div>

        <div className="Resume-item">
          <h4 className="ResumeH3"><u>Project Title: XploreATL</u></h4> 
          <p className="date">Jul 2024</p>
          <h5 className="ResumeH4"><span className="location-font-weight">Technologies Used:</span></h5>
          <ul>
            <li><b>Frontend:</b> Axios, CSS3, Font Awesome, HTML5, JavaScript(ES6+), Passport(Passport-Local & Passport-local-Mongoose), React.js, React Hooks (useState, useEffect)</li>
            <li><b>Backend:</b> MongoDB, REST Framework for building APIs</li>
          </ul>
          <h5 className="ResumeH4"><span className="location-font-weight">Key Features:</span></h5>
          <ul>
            <li>Engineered a web application for discovering and exploring eateries in Metro-Atlanta.</li>
            <li>Integrated secure user authentication and authorization with registration, login/logout functionality, and user profiles.</li>
            <li>Designed with scalability in mind, allowing for potential integration with maps, user reviews, and enhanced search features.</li>
            <li>Implemented features that allow users to mark their favorite places and bookmark locations for future reference.</li>
          </ul>
        </div>

        <div className="Resume-item">
          <h4 className="ResumeH3"><u>(Group) Project Title: Health-Fit</u></h4>
          <p className="date">Jun 2024</p>
          <h5 className="ResumeH4"><span className="location-font-weight">Technologies Used:</span></h5>
          <ul>
            <li><b>Frontend:</b> Axios, Bootstrap, CSS3(Flexbox/Grid), HTML5, React.js, React-Big-Calendar (Date-fns & DatePicker), React Router</li>
            <li><b>Middleware:</b> Body-Parser, Morgan</li>
            <li><b>Backend:</b> CORS, Express.js, MongoDB (Mongoose), Node.js</li>
          </ul>
          <h5 className="ResumeH4"><span className="location-font-weight">Key Features:</span></h5>
          <ul>
            <li>Developed a full-stack web application to track and manage personal health intake and fitness goals.</li>
            <li>Created full CRUD functionalities for users to manage health logs across the front and backend.</li>
            <li>Developed a RESTful API for seamless communication between front-end and back-end using Axios for data fetching.</li>
            <li>Designed a responsive UI with React and Bootstrap for an optimal user experience across devices.</li>
          </ul>
        </div>
      </section> 
      
      <section className="resume-section">
        <h2 className="ResumeH2">Professional Experience:</h2>
        <div className="Resume-item">
          <h3 className="ResumeH3">Senior Full Desk Account Executive</h3> 
            <p className="date">Oct 2022 - Apr 2024</p>
          <h4 className="ResumeH4"><span className="location-font-weight">Tech USA, Sandy Springs, GA</span> </h4>
          <ul>
            <li>Identified potential clients by generating leads and setting meetings to establish new business.</li>
            <li>Cultivated and maintained client and candidate relationships.</li>
            <li>Managed the sales cycle from finding clients to securing closed deals.</li>
            <li>Collaborated with management to develop processes for mentoring account executives and recruiters.</li>
            <li>Created a book of business by networking and turning leads into long-term partnerships.</li>
          </ul>
        </div>
        <div className="Resume-item">
          <h3 className="ResumeH3">Medical Sales & Optometric Technician</h3> 
            <p className="date">July 2016 - Oct 2022</p>
          <h4 className="ResumeH4"><span className="location-font-weight">Roswell Eye Clinic, Roswell, GA</span></h4>
          <ul>
            <li>Increased company revenue through strategic sales and marketing efforts.</li>
            <li>Managed billing, insurance processes, and patient history documentation.</li>
            <li>Enhanced operational efficiency through excellent customer service and communication.</li>
          </ul>
        </div>
        <div className="Resume-item">
          <h3 className="ResumeH3">Executive Assistant</h3> 
            <p className="date">Oct 2014 - Oct 2016</p>
          <h4 className="ResumeH4"><span className="location-font-weight">The Reid Ridge Lodge, Blue Ridge, GA</span></h4>
          <ul>
            <li>Managed company database, tracked, analyzed, and reported on sales performance.</li>
            <li>Represented the company in statewide business events and provided B2B/B2C communications.</li>
            <li>Trained employees, streamlined operations, and prioritized tasks to increase efficiency.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="ResumeH2">Education:</h2>
        <div className="Resume-item">
          <h3 className="ResumeH3">Full-Stack Software Engineering Certification</h3> 
            <p className="date">Graduated: July 2024</p>
            <p> - General Assembly, USA</p>
          <h4 className="ResumeH3">Pre-Medicine</h4> 
            <p className="date">2011 - 2014</p>
            <p> - Cleveland State Community College, Cleveland,TN</p>
          <h4 className="ResumeH3">High School Diploma (Dual Honor Student)</h4> 
            <p className="date">Graduated: May 2010</p>
            <p> - Fannin County High School, Blue Ridge, GA</p>
        </div>
      </section>
  
    </div>
  );
}
export default Resume  