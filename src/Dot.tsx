import React, { useRef, useState } from "react";
import "./Dot.css";

const Dot = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(Math.floor(Math.random() * 100));
  const [y, setY] = useState(Math.floor(Math.random() * 100));
  const [size, setSize] = useState(Math.floor(Math.random() * 10) + 3); // Set a minimum size of 20 and maximum of 70
  const fadeTime = Math.random() * 6 + 3; // Set a minimum fade time of 2s and maximum of 6s

  const handleAnimationEnd = () => {
    // Add the CSS class that triggers the animation
    if (dotRef.current) {
      dotRef.current.classList.add("dot-fade");
    }
    handleRestartAnimation();
    setX(Math.floor(Math.random() * 100));
    setY(Math.floor(Math.random() * 100));
    setSize(Math.floor(Math.random() * 10) + 5);
    console.log("x", x, "y", y);
  };

  const handleRestartAnimation = () => {
    // Remove the CSS class to reset the animation
    if (dotRef.current) {
      dotRef.current.classList.remove("dot-fade");
      // Use setTimeout to ensure that the class is removed before re-adding it
      setTimeout(() => {
        dotRef.current?.classList.add("dot-fade");
      }, 10);
    }
  };

  return (
    <div
      className="dot dot-fade" // Add dot-fade class here
      ref={dotRef}
      onAnimationEnd={handleAnimationEnd}
      onClick={handleRestartAnimation}
      style={{
        animationDuration: `${fadeTime}s`, // Set fade time using random value
        top: `${x}%`,
        left: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  );
};

export default Dot;
