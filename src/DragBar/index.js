import React, { useState } from 'react';
import './styles.css';

const YellowContainer = () => {
  const [isDragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleTouchStart = (e) => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - 1;
      setPosition({ x: newX });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      const newX = touch.clientX - 1;
      setPosition({ x: newX });
    }
  };

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="bar"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ left: `${position.x}px` }}
      >
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default YellowContainer;
