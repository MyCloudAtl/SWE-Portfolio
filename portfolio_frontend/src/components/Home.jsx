import React, {useState} from 'react'
import '/src/App.css'
import Projects from './Projects'
import Technology from './Technology'
import myImage from '../assets/fall.jpg';
import Resume from './Resume'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Navbar from './Navbar';
import Fall from './Fall';

const Home = () => {
    const [modalShow, setModalShow] = useState(false)
    const handleShowModal = () => setModalShow(true)

    return (
      <div className="Main" style={{ position: 'relative', minHeight: '100%'}}>
        <Fall />
        <Navbar onContactClick={handleShowModal} />
        <Contact modalShow={modalShow} setModalShow={setModalShow} />
            <div
                style={{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '100%',
                    position:'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.3,
                    zIndex: 0,
                }}
            />
        <div className="Content" style={{ position: 'relative', zIndex: 1, padding: '2rem',paddingTop: "0" }}>
            <div className="Header">
                {/* <h1>Welcome! Let's get acquainted</h1> */}
                <h2>Megan Mashburn</h2>
            </div>
          <section id="aboutme">
            <AboutMe />
          </section>
          <br/>
          <section className="color-container" id="projects">
            <Projects />
          </section>
          <br/>
          <section className="color-container" id="technologies">
            <Technology />
          </section>
          <br/>
          <section className="color-container" id="resume">
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