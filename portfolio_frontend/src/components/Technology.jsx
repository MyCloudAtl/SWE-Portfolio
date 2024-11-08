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

const Technology = () => {
  return (
    <div className="technologies">
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
<div className="tech-stack-container">
  <h2>Front-End:</h2>
  <ul className="tech-list">
    <li>React (UI Components)</li>
    <li>JavaScript (ES6+)</li>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Axios (API Integration)</li>
  </ul>
  
  <h2>Back-End:</h2>
  <ul className="tech-list">
    <li>Node.js + Express.js</li>
    <li>Python (Django)</li>
    <li>MongoDB (NoSQL) and SQL</li>
    <li>RESTful APIs</li>
  </ul>

  <h2>Tools/Skills:</h2>
  <ul className="tech-list">
    <li>Flexbox & Grid</li>
    <li>Bootstrap (Responsive Design)</li>
  </ul>

  <h2>Version Control/Team Collaboration:</h2>
  <ul className="tech-list">
    <li>GitHub</li>
    <li>Trello</li>
    <li>Slack</li>
    <li>Figma</li>
  </ul>

  <h3>Explore my projects and tech stack! <a href="https://github.com/MyCloudAtl/" className="github-link">
    <img src="../src/assets/TechImages/Github.png" alt="Github-Logo" width="48" /></a></h3>
</div>
    </div>
  );
}

export default Technology;


