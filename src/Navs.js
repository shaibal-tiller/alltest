import React from 'react'
import { Link } from 'react-router-dom'

export const NAVS = [
    {
        name: 'Admin Login',
        path: '/admin'
    },
    {
        name: 'Admin Dashboard',
        path: '/admin/dashboard'
    },
    {
        name: 'Scroll Test Trigger',
        path: '/scrollTest'
    },
    {
        name: 'Scroll Test Target',
        path: '/target'
    },
    {
        name: 'Scroll Fixed on One Side',
        path: '/testscroller'
    },
    {
        name: 'Horizontal Scrolling',
        path: '/horizonscroll'
    },
    {
        name: 'Form Input',
        path: '/form'
    },
    {
        name: 'API Tester',
        path: '/api'
    },

    {
        name: 'Full Page Scrolling',
        path: '/fullpage'
    },
    {
        name: 'V0 Code Test',
        path: '/v0'
    },
    {
        name: 'Admin Auth Login',
        path: '/auth/login'
    },
    {
        name: 'Drawing Over Image',
        path: '/draw'
    },
    {
        name: 'Shop',
        path: '/shop'
    },
]



const Navs = () => {
    return (
        <div className=' w-full min-h-screen px-[10%] justify-center items-center flex flex-wrap gap-6  bg-gray-300 bg-opacity-55'>
            {NAVS.reverse().map(nav => {

                return (<Link to={nav.path}
                    className={`text-center bg-white py-6  
                px-4 rounded-lg w-[30%] border-2 border-transparent
                 hover:border-gray-600 cursor-pointer active:scale-95`} key={nav.path}>
                    <h2 className='font-medium text-lg '>{nav.name}</h2>
                    <h4 className='text-sky-400 font-mono font-light tracking-tighter'>{nav.path}</h4>
                </Link>)
            })}
        </div>
    )
}

export default Navs