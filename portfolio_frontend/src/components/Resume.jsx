import React from 'react';
import { Link } from "react-router-dom"
import './Resume.css'

const Resume = () => {

  const handlePrint = () => {
    window.print();
};

    return (
      <div className="Resume">
           <header className="Resume-header">
        <h1 className="ResumeH1">Megan Masburn</h1>
        <p>Address: Atlanta, GA / <b>Open to Relocate</b></p>
      </header>
      <button onClick={handlePrint} className="print-button">Print Resume</button>
      <section className="Contact-section">
        <h2 className="ResumeH2">Contact:</h2>
        <div className="Contact-box">
          <p>Phone: (706) 455-7075 <br/>
            Send Email: <a href="mailto:megandmashburn@gmail.com">megandmashburn@gmail.com</a><br/>
            LinkedIn: <a href="linkedin.com/in/megan-mashburn-075598194">linkedin.com/in/MeganMashburn</a></p>
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
<h4 className="ResumeH3"><u>Project Title: React Portfolio</u><span className="font-weight-normal">Sep 2024 - Oct 2024</span></h4>
<h5 className="ResumeH4"><span className="location-font-weight">Technologies Used: </span></h5>
<ul>
    <li><b>Frontend:</b> Bootstrap, CSS3, HTML5, JavaScript(ES6+), React.js, Vite, React Router, React Hooks (useState, useEffect)</li>
    <li><b>Backend:</b> Body-Parser, CORS, Express.js, Morgan, Node.js</li>
    <li><b>Version Control:</b> GitHub</li>
</ul>
<h5 className="ResumeH4"><span className="location-font-weight">Description:</span></h5>
<p> Generated a fully responsive personal portfolio website to showcase my projects, skills, and experience as a software engineer.  The application features modern design with intuitive navigation, enhancing user experience by improving usability.</p>
<h5 className="ResumeH4"><span className="location-font-weight">Key Features:</span></h5>
<ul>
    <li>Enhanced user experience with animations using Framer Motion, adding engaging transitions and effects to components.</li>
    <li>Incorporated a contact form for easy communication using EmailJS, utilizing backend APIs for form submission.</li>
    <li>Utilized React Router for smooth navigation between different sections of the portfolio, including About, Projects, and Contact pages.</li>
</ul>
</div>
<div className="Resume-item">
<h4 className="ResumeH3"><u>Project Title: XploreATL</u> <span className="font-weight-normal">Jul 2024</span></h4>
<h5 className="ResumeH4"><span className="location-font-weight">Technologies Used: </span></h5>
<ul>
    <li><b>Frontend:</b> Axios, CSS3, Font Awesome, HTML5, JavaScript(ES6+), Passport(Passport-Local & Passport-local-Mongoose), React.js, React Hooks (useState, useEffect)</li>
    <li><b>Backend:</b> MongoDB, REST Framework for building APIs</li>
    <li><b>Version Control:</b> GitHub</li>
</ul>
<h5 className="ResumeH4"><span className="location-font-weight">Wireframes & Documentation: </span></h5>
<ul>
    <li><a href="https://www.figma.com/board/qNRbo0XPas0OSJEJwKSiwY/Untitled?node-id=1-132&t=yufTu4Oy8VwMQYBf-0" target="_blank">Figma ERD/Component Diagram</a></li>
    <li><a href="https://www.figma.com/board/oBLN9kVHmQsbu99fMCJkOk/Untitled?node-id=0-1&t=R80mUlvWTTm8p1wD-0" target="_blank">Figma Wireframe</a></li>
    <li><a href="https://trello.com/b/pk6DEKuh/xploreatl" target="_blank">Trello Board</a></li>
</ul>
<h5 className="ResumeH4"><span className="location-font-weight">Description:</span></h5>
<p>
    XploreATL is a web application designed for locals and travelers to discover and explore various eateries and hotspots in their proximity. Users can log and save their data while exploring Metro-Atlanta, Georgia. Detailed information about each place, including descriptions, locations, operating hours, and contact details, will be available once the page loads. Users can mark places as favorites or bookmark them for future reference.
</p>
<h5 className="ResumeH4"><span className="location-font-weight">Key Features:</span></h5>
<ul>
    <li>Integrated secure user authentication and authorization, including registration, login/logout functionality, and user profiles.</li>
    <li>Designed with scalability in mind, allowing for potential integration with maps, user reviews, and enhanced search features.</li>
    <li>Implemented features that allow users to mark their favorite places and bookmark locations for future reference, enhancing the exploration experience.</li>
</ul>
<h5 className="ResumeH4"><span className="location-font-weight">Link: <a href="https://github.com/MyCloudAtl/New-XploreATL.git"target="_blank">XploreATL</a></span></h5>
</div>

<div className="Resume-item">
<h4 className="ResumeH3"><u>(Group) Project Title: Health-Fit</u><span className="font-weight-normal">Jun 2024</span></h4>
        <h5 className="ResumeH4"><span className="location-font-weight">Technologies Used:</span></h5>
          <ul>
            <li><b>Frontend:</b> Axios, Bootstrap, CSS3(Flexbox/Grid), HTML5, React.js, React-Big-Calendar(Date-fns & DatePicker), React Router</li>
            <li><b>Middleware:</b> Body-Parser, Morgan</li>
            <li><b>Backend:</b> CORS, Express.js, MongoDB (Mongoose), Node.js</li>
          </ul> 
        <h5 className="ResumeH4"><span className="location-font-weight">Wireframes & Documentation:</span></h5>
          <ul>
            <li><a href="https://lucid.app/lucidchart/685c5c43-f02e-400e-ad44-514a08ea487d/edit?viewport_loc=-33%2C-479%2C2219%2C1061%2C0_0&invitationId=inv_b93ec5cd-b833-4b7d-bb7b-fbe60882eec9" target="_blank">Lucid ERD/Component Diagram</a></li>
            <li><a href="https://lucid.app/lucidchart/a378afd9-b738-490a-b79a-ada9dcfa27f5/edit?viewport_loc=-480%2C-465%2C3898%2C1865%2C0_0&invitationId=inv_a89989df-38a3-4d55-b367-0897b8300be5" target="_blank">Lucid Wireframe</a></li>
          </ul>
        <h5 className="ResumeH4"><span className="location-font-weight">Description:</span></h5>
        <p>
            Developed a full-stack web application enabling users to record, store, and manage their personal health intake and fitness goals. The application features a clean, responsive design, allowing users to log daily intake, track gym activities, and manage their fitness journey through a user-friendly interface.
        </p>
        <h5 className="ResumeH4"><span className="location-font-weight">Key Features:</span></h5>
        <ul>
            <li>Created full CRUD functionalities across front and backend for users to create, view, update, and delete health logs.</li>
            <li>Developed a RESTful API for seamless front-end and back-end communication, utilizing Axios for data fetching.</li>
            <li>Designed and implemented a responsive UI using React and Bootstrap for optimal user experience across devices.</li>
            <li>Utilized GitHub for version control and Trello for team collaboration and project management.</li>
        </ul>
        <h5 className="ResumeH4"><span className="location-font-weight">Link: <a href="https://github.com/MyCloudAtl/Health-Fit.git"target="_blank">Health-Fit</a></span></h5>
        </div>
      </section>  
      
      <section className="resume-section">
        <h2 className="ResumeH2">Professional Experience:</h2>
        <div className="Resume-item">
          <h3 className="ResumeH3">Senior Full Desk Account Executive <span className="font-weight-normal">Oct 2022 - Apr 2024</span></h3>
          <h4 className="ResumeH4"><span className="location-font-weight">Tech USA, Sandy Springs, GA</span> </h4>
          <ul>
            <li>Identify potential new clients by generating leads, making cold calls (150+ weekly) and setting meetings to establish new business.</li>
            <li>Develop and maintain relationships with clients and candidates.</li>
            <li>Manage the entire sales cycle from finding a potential client to securing closed deals.</li>
            <li>Negotiate contracts and rates with clients.</li>
            <li>Lead, train, and mentor account executives and recruiters.</li>
            <li>Specialized in the placement of candidates in the Industrial Manufacturing, Construction & Engineering Industries.</li>
            <li>Create a book of business by locating new sales opportunities through networking and turning them into long-term partnerships.</li>
            <li>Generate leads and set meetings to establish new business both locally and nationally.</li>
            <li>Complete pre-employment processes and paperwork for hiring, background checks, drug screens, etc.</li>
          </ul>
        </div>
        <div className="Resume-item">
          <h3 className="ResumeH3">Sales Professional & Medical Assistant <span className="font-weight-normal">July 2016 - Oct 2022</span></h3>
          <h4 className="ResumeH4"><span className="location-font-weight">Roswell Eye Clinic, Roswell, GA</span></h4>
          <ul>
            <li>Patient Intake Coordinator/Medical Assistant/Optician.</li>
            <li>Increased company revenue by maintaining consistent top sales numbers, expanded profitability, improved customer satisfaction, and provided timely services.</li>
            <li>Implementing business and marketing strategies to increase efficiency and improve business operation flow.</li>
            <li>Managing customer and company finances: Scheduling appointments, billing, coding patient records, verifying insurance, providing benefit breakdowns, and collecting balances.</li>
            <li>Performed Patient Intake Coordinator  responsibilities of handling a variety of administrative tasks, documenting patient history, providing EOBs, and customer service.</li>
          </ul>
        </div>
        <div className="Resume-item">
          <h3 className="ResumeH3">Executive Assistant <span className="font-weight-normal">Oct 2014 - Oct 2016</span></h3>
          <h4 className="ResumeH4"><span className="location-font-weight">The Reid Ridge Lodge, Blue Ridge, GA</span></h4>
          <ul>
            <li>Developed business marketing plans, managed the company database to track, analyze and report on performance and sales data.</li>
            <li>Provided HR assistance, represented the company in statewide business events, and provided B2B/B2C communications.</li>
            <li>Trained employees, leveraged social media, and outsourced marketing efforts.</li>
            <li>Handled logistics, streamlined operations, prepared and updated spreadsheets/reports, and prioritized tasks Answered high volume of phone calls, email inquiries, and initiated actions to respond or direct messages.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="ResumeH2">Education:</h2>
        <div className="Resume-item">
          <h3 className="ResumeH3">Full-Stack Software Engineering Certification <span className="font-weight-normal">Graduated: July 2024</span></h3>
          <p> - General Assembly, USA</p>
          <h4 className="ResumeH3">Pre-Medicine <span className="font-weight-normal">2011 - 2014</span></h4>
          <p> - Cleveland State Community College, Cleveland,TN</p>
          <h4 className="ResumeH3">High School Diploma (Dual Honor Student) <span className="font-weight-normal">Graduated: May 2010</span></h4>
          <p> - Fannin County High School, Blue Ridge, GA</p>
        </div>
      </section>
  
    </div>
  );
}
export default Resume  