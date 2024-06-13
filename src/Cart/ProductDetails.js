// ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const ProductDetails = ({  }) => {
    const productId =useParams().id
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);

                // Fetch related products (using a basic example with first 4 products)
                const relatedResponse = await fetch('https://fakestoreapi.com/products?limit=4');
                const relatedData = await relatedResponse.json();
                setRelatedProducts(relatedData.filter(p => p.id !== productId));

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (loading) return <div>Loading product details...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return null;

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <img src={product.image} alt={product.title} className="w-full mb-4 rounded-lg shadow-lg" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold">${product.price}</span>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add to Cart</button>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Related Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {relatedProducts.map(related => (
                            <div key={related.id} className="border p-4 rounded shadow">
                                <img src={related.image} alt={related.title} className="w-full h-48 object-cover mb-4" />
                                <h3 className="text-lg font-bold mb-2">{related.title}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold">${related.price}</span>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
