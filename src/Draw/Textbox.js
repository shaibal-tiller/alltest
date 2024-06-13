import React, { useEffect, useRef } from 'react';

const Textbox = ({  rectangle_markers }) => {
  


 

  return (
    <div className="w-full h-full flex items-start justify-start font-extralight font-mono text-sm">
      <div className='w-full h-full'>
        <h2 className='text-lg text-center font-semibold'>Action Log</h2>
        <ul  className='overflow-y-scroll h-[95%] '>
          {rectangle_markers?.map((marker, index) => {

            return <><li key={index} className="whitespace-pre">
              {`Rectangle-${index + 1}:`}</li>
              <li className='pl-2 text-xs'>
                {`${Object.entries(marker).map((entry, ind) => {

                  
                  return `${entry[0]}:[${entry[1]['x']?.toFixed(1)}, ${entry[1]['y']?.toFixed(1)}] `
                })}`}{rectangle_markers?.length - 1 == index ? <span className="w-fit animate-ping">|</span> : ""}
              </li></>
          })}

        </ul>
      </div>
    </div>
  );
};

export default Textbox;
