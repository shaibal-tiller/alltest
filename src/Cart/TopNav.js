// TopNav.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from './cartSlice';

const TopNav = ({ onMenuClick }) => {
    const dispatch = useDispatch();
    const cartItemCount = useSelector(state => state.cart.items.length);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    const handleCartToggle = () => {
        dispatch(toggleCart());
    };

    return (
        <nav className='flex justify-between items-center p-4 bg-blue-500 text-white shadow-lg'>
            <div className='flex items-center'>
                <button className='mr-4 lg:hidden' onClick={onMenuClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <h1 className='text-xl font-bold'>Test Shop for Redux</h1>
            </div>
            <div className='relative flex items-center'>
                <button onClick={handleCartToggle} className='relative mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l3.28-9.3A1 1 0 0019.35 2H5.65l-.93-1H1" />
                    </svg>
                    {cartItemCount > 0 && (
                        <span className='absolute top-0 right-0 inline-block w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full'>
                            {cartItemCount}
                        </span>
                    )}
                </button>
                <div className='relative'>
                    <button
                        onMouseEnter={() => setProfileMenuOpen(true)}
                        onMouseLeave={() => setProfileMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m0 2v1m0 2v1m0 2v1m0 2v1m0 2v1m0 2v1m0 2v1m0-22h1.5A1.5 1.5 0 0115 2.5v19A1.5 1.5 0 0113.5 23H9.5A1.5 1.5 0 018 21.5v-19A1.5 1.5 0 019.5 1H11" />
                        </svg>
                    </button>
                    {profileMenuOpen && (
                        <div
                            onMouseEnter={() => setProfileMenuOpen(true)}
                            onMouseLeave={() => setProfileMenuOpen(false)}
                            className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2'
                        >
                            <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Profile</a>
                            <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Settings</a>
                            <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
