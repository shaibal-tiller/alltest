// CartContainer.js
import React from 'react';
import { useSelector } from 'react-redux';

const CartContainer = () => {
    const isCartOpen = useSelector(state => state.cart.isOpen);
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isCartOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`} style={{ width: '20%' }}>
            <h2 className='text-xl font-bold p-4'>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id} className='p-4 border-b'>
                        <div className="flex items-center">
                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                            <div>
                                <h3 className='text-lg font-bold'>{item.title}</h3>
                                <p className='text-gray-700'>${item.price}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartContainer;
