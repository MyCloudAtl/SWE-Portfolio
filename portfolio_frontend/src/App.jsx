import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Challenger from './components/Challenger'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Technology from './components/Technology'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="main-container">
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/Technology' element={<Technology/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Challenger' element={<Challenger/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
