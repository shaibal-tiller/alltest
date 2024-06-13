import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './style.css'

import plis_top from './images/plis_top.png'
import dashboard from './images/dashboard.png'
import dash_front from './images/dash_front.png'

const ScrollFixedOneSide = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
  

      <Parallax pages={3.5} style={{ display: 'flex' ,justifyContent:'space-between'}}>
        <ParallaxLayer offset={0}  sticky={{ start: 0, end: 3 }} style={{zIndex:-10}} >
          <div className='w-1/2  bg-green-300 h-screen  text-white flex flex-col -z-10
                justify-center font-poppins px-12'>
            <h2 className='text-[17rem]  font-[500] leading-[250px]'>PLIS</h2>
            <p className='text-5xl pl-4 font-[500]'>Planning Information System</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={0}  style={{width:'90%', marginLeft:'auto',zIndex:99999}}>
          <img className='w-full ml-auto' src={plis_top} />

        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={1}  style={{width:'50%', marginLeft:'auto',zIndex:'99 !important'}}>

          <h2 className='leading-10'>Interactive</h2>
          <h2>tool</h2>
          <img className='w-[full] ' src={dashboard} />


        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={2}  style={{width:'50%', marginLeft:'auto',zIndex:'99 !important'}}>
          <p className='text-[84px] leading-[1.1] px-32 pb-8'>Uses climate risk information during project appraisal</p>
          <img className='w-[full] ' src={dash_front} />
          <p className='text-[84px] leading-[1.1] px-32 pb-8'>Functionalities to make project management easier</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
export default ScrollFixedOneSide
