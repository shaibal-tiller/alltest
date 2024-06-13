import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import foodData from './data';
import Pagination from './Pagination';

const Horizonscroll = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const itemWidth = scrollRef.current ? scrollRef.current.scrollWidth / foodData.length : 0;
  const totalWidth = scrollRef.current ? scrollRef.current.scrollWidth : 0;
  
  
  const scrollToItem = (index) => {
    const itemWidth = scrollRef.current.scrollWidth / foodData.length;
    scrollRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    const scrollHandler = () => {
      setScrollLeft(scrollRef.current.scrollLeft);
      const newIndex = Math.round(scrollRef.current.scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', scrollHandler);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', scrollHandler);
      }
    };
  }, [itemWidth]);

  useEffect(() => {
    let intervalId;
    if (scrollRef.current) {
      intervalId = setInterval(() => {
        if (scrollRef.current) {
          const newIndex = (currentIndex + 1) % foodData.length;
          setCurrentIndex(newIndex);
          scrollRef.current.scrollTo({
            left: (newIndex * itemWidth) % totalWidth,
            behavior: 'smooth'
          });
        }
      }, 8000);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, itemWidth, totalWidth]);

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setStartScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const distance = x - startX;
    scrollRef.current.scrollLeft = startScrollLeft - distance;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const itemWidth = scrollRef.current.scrollWidth / foodData.length;
    const newIndex = Math.round(scrollRef.current.scrollLeft / itemWidth);
    setCurrentIndex(newIndex);
  };
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    e.preventDefault()
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const distance = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = (e) => {
    e.preventDefault()
    setIsDragging(false);
    const itemWidth = scrollRef.current.scrollWidth / foodData.length;
    const newIndex = Math.round(scrollRef.current.scrollLeft / itemWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <div className='flex flex-col justify-between items-center w-full h-screen bg-gray-300 px-[20%] shadow-lg rounded-lg'>
      <div
        ref={scrollRef}
        className='w-full h-52 my-auto section-container flex items-center gap-[15%] overflow-x-scroll'
        style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll', width: '79.6vw', border: '1px solid #ccc', borderRadius: '10px' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Map over the data array */}
        {foodData.map((item, index) => (
          <div
            key={`${item.name}-${item.order}`}
            className='p-4 w-full h-48 bg-cover bg-center shadow-md rounded-md'
            style={{ backgroundImage: `url(${item.image})`, scrollSnapAlign: 'start' }}
          >
            <div className='w-[350px]'> </div>
            {/* Display item name */}
            <h2 className='font-bold text-white text-center text-5xl'>{item.name}</h2>
            {/* Display description for xs */}
            <p className='text-white text-center text-xs'>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination actionHandler={scrollToItem} currentIndex={currentIndex} foodData={foodData} />

    </div>
  );
};

export default Horizonscroll;
