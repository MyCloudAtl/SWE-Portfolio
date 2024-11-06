import React, { useState } from "react";
import "./Technology.css";
import ReactLogo from '../assets/TechImages/React.png';
import HTML5 from '../assets/TechImages/Html.png';
import CSS3 from '../assets/TechImages/Css3.png'
import Javascript from '../assets/TechImages/Javascript.png'
import Bootstrap from '../assets/TechImages/Bootstrap.png';
import NodeJS from '../assets/TechImages/Node.png';
import Figma from '../assets/TechImages/Figma.png';
import Django from '../assets/TechImages/Django.png';
import MongoDB from '../assets/TechImages/MongoDB.png';
import Python from '../assets/TechImages/Python.png';
import Navbar from "../components/Navbar";
import Contact from './Contact'

const Technology = () => {
  const [modalShow, setModalShow] = useState(false)
    const handleShowModal = () => setModalShow(true)
  return (
    <div className="technologies">
      <Navbar onContactClick={handleShowModal} />
      <Contact modalShow={modalShow} setModalShow={setModalShow} />
      <h1 id='techh1'>Technologies</h1>
      <div className="orbit-container">
        <div className="frontend">Technology</div>
        <div className="html"><img src={HTML5} alt="HTML5"/></div>
        <div className="css"><img src={CSS3} alt="CSS3"/></div>
        <div className="javascript"><img src={Javascript} alt="Javascript"/></div>
        <div className="react"><img src={ReactLogo} alt="React"/></div>
        <div className="bootstrap"><img src={Bootstrap} alt="Bootstrap"/></div>
        <div className="node"><img src={NodeJS} alt="Node.js"/></div>
        <div className="figma"><img src={Figma} alt="Figma"/></div>
        <div className="django"><img src={Django} alt="Django"/></div>
        <div className="mongodb"><img src={MongoDB} alt="MongoDB"/></div>
        <div className="python"><img src={Python} alt="Python"/></div>
      </div>
      <h2>Front-End:</h2>
        <ul>
           <li>HTML5, CSS3, JavaScript(ES6+), React skills: dynamic, reusable UI components (e.g., carousel, review sections, service listings).</li>
        </ul>
         <h2>Back-End:</h2>
          <ul>
             <li>Express.js + Node.js (To handle server-side logic, manage API requests (e.g., submitting reviews, uploading videos), and serve the frontend. You can also manage form submissions for services or customer inquiries.), Django, Python, and RESTful APIs.
            Describe your experience working with databases such as MongoDB (NoSQL) and SQL. Showcase back-end projects (APIs, database-driven applications) with detailed descriptions of the architecture and tools used.</li>
          </ul>
         <h2>Tools/Skills:</h2>
          <ul>
            <li>Bootstrap(responsive design), Flexbox, and Grid
            List tools and workflows such as GitHub, Trello, Slack, and Figma. Provide a brief description of how these tools support your development process (e.g., version control, team collaboration, prototyping).</li>
           </ul>
         <p>Front-End Page:
Projects that highlight your front-end development (e.g., responsive designs, React components, and API integration using Axios).
Brief descriptions of your use of Responsive Design, Flexbox, Grid, and Bootstrap.
         </p>

      <p>Explore my projects and tech stack!</p>
    </div>
  );
}

export default Technology;


