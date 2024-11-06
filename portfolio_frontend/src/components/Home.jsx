import React, {useState} from 'react'
import '/src/App.css'
import Projects from './Projects'
import Technology from './Technology'
import myImage from '../assets/mak-UUmKahgqBSg-unsplash.jpg';
import Resume from './Resume'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Navbar from './Navbar';

const Home = () => {
    const [modalShow, setModalShow] = useState(false)
    const handleShowModal = () => setModalShow(true)

    return (
      <div className="Main" style={{ position: 'relative', minHeight: '100%'}}>
        <Navbar onContactClick={handleShowModal} />
        <Contact modalShow={modalShow} setModalShow={setModalShow} />
            <div
                style={{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position:'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.3,
                    zIndex: 0,
                }}
            />
        <div className="Content" style={{ position: 'relative', zIndex: 1, padding: '4rem',paddingTop: "0" }}>
            <div className="Header">
                {/* <h1>Welcome! Let's get acquainted</h1> */}
                <h2>Megan Mashburn</h2>
            </div>
          <section id="aboutme">
            <AboutMe />
          </section>
          <br/>
          <section id="projects">
            <Projects />
          </section>
          <br/>
          <section id="technologies">
            <Technology />
          </section>
          <br/>
          <section id="resume">
            <Resume />
          </section>
          <br/>
          <section id="contact">
            <Contact />
          </section>
      </div>
      </div>
    )
  }
export default Home  