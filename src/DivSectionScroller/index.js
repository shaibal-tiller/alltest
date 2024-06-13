import React from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate()
    const handleToDiv = (e) => {
        const targetDiv = e.target.innerHTML.split(" ")[e.target.innerHTML.split(" ").length - 1].toLowerCase();
        console.log(targetDiv);
        navigate("/target/#" + targetDiv)
    }
    return (
        <div className='flex justify-center items-center h-screen w-full bg-[#f2f2f2] gap-4'>
            <button onClick={handleToDiv} className=' bg-yellow-200 px-4 py-1 rounded-md'>Take me to Moon</button>
            <button onClick={handleToDiv} className=' bg-yellow-200 px-4 py-1 rounded-md'>Take me to Sun</button>
            <button onClick={handleToDiv} className=' bg-yellow-200 px-4 py-1 rounded-md'>Take me to Mars-nai</button>
        </div>
    )
}

export default Home