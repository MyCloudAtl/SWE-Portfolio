import React from 'react';
import "./AboutMe.css";
import Rome from '../assets/Rome.jpg';
import Hike from '../assets/Hike.jpg';
import Brit from '../assets/Brit.jpg';
import Gibbs from '../assets/Gibbs.jpg';
import Switzerland from '../assets/Switzerland.jpg';
import Boop from '../assets/Boop.jpg';
import Cloud2 from '../assets/Cloud2.jpg';
import Cloud3 from '../assets/Cloud3.jpg';
import Europe from '../assets/Europe.jpg';
import Brook from '../assets/Brook.jpg';
import Brazil from '../assets/Brazil.jpg';
import Japan from '../assets/Japan.jpg';

const AboutMe = () => {
    return (
        <div className="about">
            <div className="row"> 
                <div className="column">
                    <img src={Rome} alt="Rome" />
                    <img src={Cloud3} alt="Cloud3" />
                    <img src={Brook} alt="Brook" />
                    <img src={Europe} alt="Europe" />
                    <img src={Switzerland} alt="Switzerland" />
                    <img src={Gibbs} alt="Gibbs" />
                </div>
                <div className="bg-text">
                    <h2 id="AMheader">My Journey</h2>
                Hello, it's a pleasure to meet you! My name is Megan Mashburn, and I'm a passionate Full-Stack Software Engineer. I have a tenacious personality and a passion for creating elegant solutions to solve complex problems. 
                My desire for constant growth and new challenges inspired me to embark on a career change, and I am excited to contribute my skills to a dynamic team.
                Recently, I completed a demanding Software Engineering Immersive Program with General Assembly, where I grew and developed skills in HTML, CSS, Javascript, React, Django, SQL, and Python. 
                My previous professional development has helped me build strong communication skills and the skill to prioritize tasks based on their importance. 
                <br></br>Outside of work I find joy in the little things, like a beautiful sky on a sunny day. my favorite color is yellow, which reflects my optimistic outlook on life. 
                    I owe my journey into tech to my boyfriend, who recognized my eagerness to learn and encouraged me to pursue this path.
                   I enjoy nice weather spent with loved ones and my dog, enjoying the simple pleasures in life. I particularly love winter—not just for the gift-giving season, but for the warm, beautiful lights and the overall spirit of love and joy that fills the air.
                     I believe I would be a valuable asset to any company, one that you can cultivate and grow alongside. Thank you for taking the time to learn about my journey! 
                </div>
                <div className="column">
                    <img src={Boop} alt="Boop" />
                    <img src={Brit} alt="Brit" />
                    <img src={Japan} alt="Japan" />
                    <img src={Cloud2} alt="Cloud2" />
                    <img src={Brazil} alt="Brazil" />
                    <img src={Hike} alt="Hike" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

