// ProductList.js
import React from 'react';
import useCategoryProducts from './useCategoryProducts';
import { Link } from 'react-router-dom';

const ProductList = ({ category }) => {
    const { products, loading, error } = useCategoryProducts(category);

    if (loading) return <div>Loading products...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {products.map(product => (
                <Link to={`/shop/products/${product.id}`}><div key={product.id} className="product-card cursor-pointer">

                    <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
                    <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                    {/* <p className="text-gray-700 mb-2">{product.description}</p> */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">${product.price}</span>
                        <span className="text-gray-600">{product.rating.rate} ({product.rating.count})</span>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
