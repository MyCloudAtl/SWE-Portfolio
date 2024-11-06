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
                    <h3><b><u>Hello, it's a pleasure to meet you!</u></b></h3>
                    <p>My name is Megan Mashburn, and I'm a passionate Full-Stack Software Engineer. I have a tenacious personality and a genuine passion for solving complex problems. Driven by my desire for continuous growth, I made the exciting decision to transition into the tech industry. </p>
                    <p>Recently, I completed an intensive Software Engineering Immersive Program with General Assembly, where I gained hands-on experience in HTML, CSS, Javascript, React, Django, SQL, and Python. Through the program, I enhanced my technical skills, sharpened my communication abilities, and improved my capacity to prioritize tasks effectively.</p>
                    <p>I’ve always had an optimistic outlook on life, believing that every day brings a new opportunity to learn and that every experience is a teachable moment. I appreciate the simple pleasures in life - nice weather on a beautiful day, connecting with new people, and trekking through nature with my dog.</p>
                    <p>If you ask me about my favorite time of year, I’ll tell you it’s winter. There’s something so special about the crisp air, the warmth of the twinkling lights, and joyful decorations everywhere.</p>
                    <p>My partner has always been a source of encouragement, motivating me to push my boundaries and embrace new challenges. This desire for personal growth, combined with my endless curiosity, has led me to pursue a career in tech. </p>
                    <p>I am confident I would be a valuable contributor to any team with the potential for endless growth. Thank you for taking the time to learn about me and my journey thus far!</p>
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

