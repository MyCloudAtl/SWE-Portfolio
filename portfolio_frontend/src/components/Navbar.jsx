import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import './SlideTabs.css';

const Navbar = ({ onContactClick }) => {
  return (
    <div className="slide-tabs-container">
      <SlideTabs onContactClick={onContactClick}/>
    </div>
  );
};

const SlideTabs = ({ onContactClick }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

    return (
      <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="slide-tabs"
    >
      <Tab setPosition={setPosition} to="#home">Home</Tab>
      <Tab setPosition={setPosition} to="#technologies">Technology</Tab>
      <Tab setPosition={setPosition} to="#projects">Projects</Tab>
      <Tab setPosition={setPosition} to="#resume">Resume</Tab>
      {/* <Tab setPosition={setPosition} to="#challenger">Challenger</Tab> */}
      <Tab setPosition={setPosition} onClick={onContactClick} isButton>Contact</Tab>
      <Cursor position={position} />
    </ul>
  );
};
  
  const Tab = ({ children, setPosition, to, onClick, isButton }) => {
    const ref = useRef(null);
  
    return (
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;
  
          const { width } = ref.current.getBoundingClientRect();
  
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="tab"
      >
        {isButton ? (
        <button onClick={onClick}>
          {children}
        </button>
      ) : (
        <a href={to}>
          {children}
        </a>
        )}
      </li>
    );
  };
  
  const Cursor = ({ position }) => {
    return (
      <motion.li
        animate={{
          left: position.left,
          width: position.width,
          opacity: position.opacity,
        }}
        className="cursor"
      />
    );
  };
export default Navbar  