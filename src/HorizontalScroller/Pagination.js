import React from 'react';

const Pagination = ({ currentIndex, foodData, actionHandler }) => {
  return (
    <div className="flex mt-4  rounded-l-full rounded-r-full text-white items-center justify-center">
      {foodData.map((_, index) => (
        <button
          onClick={(e) => { e.preventDefault(); actionHandler(index) }}
          key={index}
          className={`mx-2 w-4 h-4 rounded-full my-2 ${currentIndex === index ? 'bg-yellow-500' : 'bg-white '}`} />
      ))}
    </div>
  );
};

export default Pagination;