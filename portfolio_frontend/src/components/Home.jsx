import React, { useState} from 'react'
import MyPic from '../assets/MyPic.jpeg'
import '/src/App.css'
import Projects from './Projects'
import Technology from './Technology'
import myImage from '../assets/mak-UUmKahgqBSg-unsplash.jpg';
import Resume from './Resume'
import Book from './Book';

const Home = () => {
    const [modalShow, setModalShow] = useState(false)
    const handleShowModal = () => setModalShow(true)

    return (
      <div className="Main" style={{ position: 'relative'}}>
            <div
                style={{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.3,
                    zIndex: 0,
                }}
            />
        <div className="Content" style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
            <div className="Header">
                {/* <h1>Welcome! Let's get acquainted</h1> */}
                <h2>Megan Mashburn</h2>
                <h3 className="Title">Full-Stack Developer</h3>
            </div>
            <Book />
        <img src={MyPic} alt="Megan Mashburn" style={{ width: '200px', height: '200px' }} />
        <p>Hello, it's a pleasure to meet you! My name is Megan Mashburn, and I'm a passionate Full-Stack Software Engineer. 
          I have a tenacious personality and a passion for creating elegant solutions to solve complex problems. 
          Recently, I completed a demanding Software Engineering Immersive Program with General Assembly, where I grew and developed skills in HTML, CSS, Javascript, React, Django, SQL, and Python. 
          My previous professional development has helped me build strong communication skills and the skill to prioritize tasks based on their importance. 
          My desire for constant growth and new challenges inspired me to embark on this career change, and I am excited to contribute my skills to a dynamic team.
          Outside of work, I bring a team-oriented mindset from my 14 years of playing soccer, where I cherished the camaraderie of being a varsity player. 
          I find joy in the little things, like the beautiful sky on a sunny day—my favorite color is yellow, which reflects my optimistic outlook on life. 
          I owe my journey into tech to my boyfriend, who recognized my eagerness to learn and encouraged me to pursue this path.
          A perfect day for me includes nice weather spent with loved ones and my dog, enjoying the simple pleasures in life. I particularly love winter—not just for the gift-giving season, but for the warm, beautiful lights and the overall spirit of love and joy that fills the air.
          I believe I would be a valuable asset to any company, one that you can cultivate and grow alongside. Thank you for taking the time to learn about my journey! Please feel free to reach out via email or call me directly at (706) 455-7075 if you have any questions.</p>
          <section id="projects">
            <Projects />
          </section>
          <section id="technologies">
            <Technology />
          </section>
          <section id="resume">
            <Resume />
          </section>
      </div>
      </div>

      //work experience websites
      //gracehoperconference
      //leetcode
    )
  }
export default Home  