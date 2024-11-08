import React, { useEffect, useState } from 'react';
import './Fall.css'

const Fall = () => {
    const [leaves, setLeaves] = useState([]);
  
    useEffect(() => {
      const numLeaves = 30;
      const generatedLeaves = [];
  
      for (let i = 0; i < numLeaves; i++) {
        const leftPosition = Math.random() * 100;
        const delay = Math.random() * 10;
        const size = Math.random() * (70 - 30) + 30;
        generatedLeaves.push({
          leftPosition,
          delay,
          size
        });
      }
  
      setLeaves(generatedLeaves);
    }, []);
  
    return (
      <div className="falling-leaves" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none', 
      }}>
        {leaves.map((leaf, index) => (
          <div
            key={index}
            className="leaf"
            style={{
              left: `${leaf.leftPosition}%`,
              animationDelay: `${leaf.delay}s`,
              width: `${leaf.size}px`,
              height: `${leaf.size}px`
            }}
          />
        ))}
      </div>
    );
  };
  
  export default Fall;