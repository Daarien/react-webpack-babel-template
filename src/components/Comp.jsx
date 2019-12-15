import React, { useState, useRef, useEffect } from 'react';

export default function Comp() {
  const [isHovered, setHoverState] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timer = useRef(null);
  const hoverTime = useRef(0);
  useEffect(() => {
    console.log('Comp did mount');
  }, []);

  const handleMouseEnter = event => {
    setHoverState(true);
  };
  const handleMouseLeave = event => {
    setHoverState(false);
    const time = hoverTime.current;
    console.log(`TCL: Comp -> hoverTime = ${time / 1000}s`);
    clearInterval(timer.current);
    timer.current = null;
    hoverTime.current = 0;
  };
  const handleMouseOver = event => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        hoverTime.current += 100;
      }, 100);
    }
  };
  const handleMouseMove = event => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="hovered-block"
    >
      <p>{isHovered ? 'Mouse over me' : 'Mouse outside of me'}</p>
      <p>{`Position: x=${position.x}, y=${position.y}`}</p>
    </div>
  );
}
