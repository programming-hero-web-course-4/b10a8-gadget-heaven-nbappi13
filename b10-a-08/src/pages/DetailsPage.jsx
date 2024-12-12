import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsPage = () => {
    const { productId } = useParams();
    const { addToCart, addToWishlist, cart, wishlist } = useContext(AppContext);
    const [product, setProduct] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();
                const foundProduct = data.find(p => p.product_id === productId);
                setProduct(foundProduct);
                setIsWishlisted(wishlist.some(item => item.product_id === foundProduct.product_id));
                setIsInCart(cart.some(item => item.product_id === foundProduct.product_id));
            } catch (error) {
                console.error('Error fetching the product:', error);
            }
        };

        fetchProduct();
    }, [productId, wishlist, cart]);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success("Item added to cart!");
    };

    const handleAddToWishlist = () => {
        addToWishlist(product);
        setIsWishlisted(true);
        toast.success("Item added to wishlist!");
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="bg-purple-500 text-white text-center py-6">
                <h2 className="text-2xl font-bold">Product Details</h2>
                <p className="text-sm">Explore the latest gadgets that will take your experience to the next level.</p>
            </div>
            <div className="container mx-auto p-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                        <img src={product.product_image} alt={product.product_title} className="w-64 h-64 object-cover rounded-lg" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-bold mb-2">{product.product_title}</h3>
                        <p className="text-lg text-green-600 font-semibold mb-2">Price: ${product.price}</p>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                        <ul className="list-disc pl-5 mb-4">
                            {product.specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
                            <span className="ml-2">{product.rating}</span>
                        </div>
                        <button 
                            onClick={handleAddToCart} 
                            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mr-2">
                            Add to Cart
                        </button>
                        <button 
                            onClick={handleAddToWishlist}
                            className={`bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 ${isWishlisted || isInCart ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={isWishlisted || isInCart}>
                            <span className="text-red-500">♡</span>
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DetailsPage;
