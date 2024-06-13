// useCategoryProducts.js
import { useState, useEffect } from 'react';

const useCategoryProducts = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!category) return;

        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    return { products, loading, error };
};

export default useCategoryProducts;
