// SideBar.js
import React from 'react';
import useCategories from './useCategories';

const SideBar = ({ selectedCategory, setSelectedCategory, isOpen, onClose }) => {
    const { categories, loading, error } = useCategories();

    if (loading) return <div>Loading categories...</div>;
    if (error) return <div>Error loading categories</div>;

    return (
        <div className={`fixed inset-0 z-30 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-64`}>
            <div className="p-4 border-b flex justify-between items-center lg:hidden">
                <h2 className="text-xl font-bold">Categories</h2>
                <button onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <ul className="p-4">
                {categories.map(category => (
                    <li
                        key={category}
                        className={`p-2 cursor-pointer ${selectedCategory === category ? 'bg-gray-300' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
