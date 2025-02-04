import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const updateMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition); // Cleanup
    };
  }, []);

  return (
    <h2>Mouse Position: X:{x}, Y:{y}</h2>
  );
}

export default MouseTracker;