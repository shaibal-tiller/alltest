// Cart.js
import React, { useState } from 'react';
import TopNav from './TopNav';
import ProductList from './ProductList';
import CartContainer from './CartContainer';
import SideBar from './SideBar.js'
import { Provider } from 'react-redux';
import store from './store';
import './style.css'
const Cart = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <Provider store={store}>
            <div className='w-full h-screen  overflow-hidden'>
                <TopNav onMenuClick={handleMenuClick} /> 
                <div className="flex-1 flex h-full">
                    <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
                    <div className="flex-1 overflow-auto">
                        <ProductList category={selectedCategory} />
                    </div>
                    <CartContainer />
                </div>
            </div>
        </Provider>
    );
};

export default Cart;
