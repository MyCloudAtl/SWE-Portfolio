import React from 'react'
import { Link } from "react-router-dom"
import Contact from './Contact'

const Navbar = ({ onContactClick }) => {

    return (
        <div className="linkbar">
          <Link to="/">
            <button className="linkbtn">Home</button>
          </Link>
          <Link to="/Technology">
            <button className="linkbtn">Technology</button>
          </Link>
          <Link to="/Projects">
            <button className="linkbtn">Projects</button>
          </Link>
          <Link to="/Resume">
            <button className="linkbtn">Resume</button>
          </Link>
          <Link to="/Challenger">
            <button className="linkbtn">Challenger</button>
          </Link>
          <button className="linkbtn" onClick={onContactClick}>Contact</button>
        </div>
    )
  }
export default Navbar  