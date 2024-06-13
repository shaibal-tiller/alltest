import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './style.css'

import plis_top from './images/plis_top.png'
import dashboard from './images/dashboard.png'
import dash_front from './images/dash_front.png'

const ScrollFixedOneSide = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div className=' w-full '>


      <section className='flex relative w-full'>
        <div className='sticky top-0 left-0 w-full h-screen bg-green-500 text-[10rem] font-bold font-mono flex flex-col justify-center items-center'>
          <h2>PLIS</h2>
          <p className='text-5xl'>MAAF KOR EIBAR</p>
        </div>
        <div className='w-full h-full'>
          <div className='h-[80vh] bg-purple-400 w-full ml-auto'></div>
          <div className='h-[80vh] bg-emerald-200 w-full ml-auto'></div>
          <div className='h-[80vh] bg-yellow-600 w-full ml-auto'></div>
        </div>

      </section >

      <section className='flex relative w-full flex-row-reverse'>
        <div className='sticky top-0 left-0 w-full h-screen bg-green-500 text-[10rem] font-bold font-mono flex flex-col justify-center items-center'>
          <h2>PLIS</h2>
          <p className='text-5xl'>MAAF KOR EIBAR</p>
        </div>
        <div className='w-full h-full'>
          <div className='h-[80vh] bg-purple-400 w-full ml-auto'></div>
          <div className='h-[80vh] bg-emerald-200 w-full ml-auto'></div>
          <div className='h-[80vh] bg-yellow-600 w-full ml-auto'></div>
        </div>

      </section >


    </div >
  )
}
export default ScrollFixedOneSide
