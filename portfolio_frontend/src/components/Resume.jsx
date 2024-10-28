import { Link } from "react-router-dom"
import './Resume.css'

const Resume = () => {

    return (
      <div className="Resume">
           <header className="Resume-header">
        <h1 className="ResumeH1">Megan Masburn</h1>
        <p>Address: Atlanta, GA / <b>Open to Relocate</b></p>
      </header>

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
      
      <section className="Resume-section">
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
          <h3 className="ResumeH3">Pre-Medicine <span className="font-weight-normal">2011 - 2014</span></h3>
          <p> - Cleveland State Community College, Cleveland,TN</p>
          <h3 className="ResumeH3">High School Diploma (Dual Honor Student) <span className="font-weight-normal">Graduated: May 2010</span></h3>
          <p> - Fannin County High School, Blue Ridge, GA</p>
        </div>
      </section>
  
    </div>
  );
}
export default Resume  