import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { news_content_list } from './data';
import Pagination from './Pagination';
import ItemCard from './ItemCard';

const Horizonscroll = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const itemWidth = scrollRef.current ? scrollRef.current.scrollWidth / news_content_list.length : 0;
  const totalWidth = scrollRef.current ? scrollRef.current.scrollWidth : 0;
  const [data, setData]=useState(news_content_list.filter(el=>el.status=='published'))

  const scrollToItem = (index) => {
    const itemWidth = scrollRef.current.scrollWidth / news_content_list.length;
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
          const newIndex = (currentIndex + 1) % news_content_list.length;
          setCurrentIndex(newIndex);
          scrollRef.current.scrollTo({
            left: (newIndex * itemWidth) % totalWidth,
            behavior: 'smooth'
          });
        }
      },5000);
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
    const itemWidth = scrollRef.current.scrollWidth / news_content_list.length;
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
    const itemWidth = scrollRef.current.scrollWidth / news_content_list.length;
    const newIndex = Math.round(scrollRef.current.scrollLeft / itemWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <div className='flex flex-col justify-between items-center  w-[90%] h-screen bg-gray-300 px-[10%] shadow-lg rounded-lg overflow-hidden'>
      <div
        ref={scrollRef}
        // className='w-full  my-auto section-container flex items-end  overflow-x-scroll h-[50vh] gap-6 rounded-md'
        className='relative !flex w-full section-container my-auto overflow-x-scroll gap-[.5rem]'
        style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll', border: '1px solid #ccc', borderRadius: '10px' }}
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
        {data.map((item, index) => (
          <ItemCard item={item} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination actionHandler={scrollToItem} currentIndex={currentIndex} data={data} />

    </div>
  );
};

export default Horizonscroll;
