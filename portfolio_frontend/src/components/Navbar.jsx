import { Link } from "react-router-dom"

const Navbar = () => {

    return (
      <div className="navbar">
        <div>
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
                <Link to="/Contact">
                    <button className="linkbtn">Contact</button>
                </Link>
            </div>
        </div>
      </div>
    )
  }
export default Navbar  