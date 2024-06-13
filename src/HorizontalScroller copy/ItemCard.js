import React from 'react'

{/* <img src={item?.photo} className="text-center object-contain h-full bg-[#80808055]" alt={`News ${index}`} />
              <div className="blur-"></div>
              <div className='px-2 py-4  bg-opacity-70 bg-[#f2f2f2]  absolute bottom-0 left-0 w-full'>
                <p className='font-semibold  truncate '>{item.name}</p>
                <p className='truncate text-sm'>{item.description}</p>
              </div>
              <caption className="absolute bottom-14 right-2 text-xs opacity-50">{item.date}</caption> */}


const ItemCard = ({ item }) => {
    return (
        <div
            key={`${item.name}-${item.order}`}
            // className='relative   shadow-md rounded-md w-full  '
            className=' justify-center !h-[32rem] rounded-md !w-[90%] relative'
            style={{ scrollSnapAlign: 'start' }} >
            <img src={item?.photo} 
            className="text-center  !w-full  bg-[#80808055] mx-auto max-w-full object-contain block h-[85%] my-auto " />
            {/* className="text-center  w-full  h-auto bg-[#80808055] mx-auto" /> */}


            <div className='px-2 py-4  bg-opacity-70 bg-[#f2f2f2]  text-black '>
                <p className='font-semibold  truncate '>{item.name}</p>
                <p className='truncate text-sm'>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemCard