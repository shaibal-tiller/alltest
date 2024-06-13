import React, { useState, useEffect } from 'react';

const Pagination = ({ currentIndex, data, actionHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        const newIndex = (currentIndex + 1) % data.length;
        actionHandler(newIndex);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, isHovered]);

  const handleMouseEnter = (index) => {
    if (index === currentIndex) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex mt-4  rounded-l-full rounded-r-full text-white items-center justify-center">
      {data.map((_, index) => (
        <button
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => actionHandler(index)}
          className={`mx-2 w-4 h-4 rounded-full my-2 ${currentIndex === index ? 'bg-yellow-500' : 'bg-white '}`}
        />
      ))}
    </div>
  );
};

export default Pagination;
