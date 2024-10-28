import React, { useState } from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import MyPic from '../assets/MyPic.jpeg'
import '/src/App.css'

const Home = () => {
    const [modalShow, setModalShow] = useState(false)
    const handleShowModal = () => setModalShow(true)

    return (
        <div className="Main">   
            <div className="Header">
        <h1>Welcome! Let's get acquainted</h1>
                <h2>Megan Mashburn</h2>
                <h2 className="Title">Full-Stack Developer</h2>
        </div>
        <img src={MyPic} alt="Megan Mashburn" />
        <p>Hello, it's a pleasure to meet you! My name is Megan Mashburn, and I'm a dedicated Full-Stack Software Engineer. I have a tenacious personality and a passion for creating elegant solutions to solve complex problems. Recently, I completed a demanding Software Engineering Immersive Program with General Assembly, where I grew and developed skills in HTML, CSS, Javascript, React, Django, SQL, and Python. My previous professional development has helped me build strong communication skills and the skill to prioritize tasks based on their importance. My need for constant challenge and growth was the driving force to this career change. I believe I would be a great asset for any company, one you could cultivate and grow.</p>
      </div>
    )
  }
export default Home  