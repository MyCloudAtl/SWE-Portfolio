import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Challenger from './components/Challenger'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Technology from './components/Technology'
import AboutMe from './components/AboutMe'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [modalShow, setModalShow] = useState(false)
  const handleShowModal = () => setModalShow(true)

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home onContactClick={handleShowModal}/>} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Challenger" element={<Challenger />} />
      </Routes>
      <Contact modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
}

export default App
