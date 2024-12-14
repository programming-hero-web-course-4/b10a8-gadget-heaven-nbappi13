import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './WishlistPage.css';

const WishlistPage = () => {
    const { wishlist, moveToCartFromWishlist, removeFromWishlist } = useContext(AppContext);
    const [localWishlist, setLocalWishlist] = useState([...wishlist]);

    useEffect(() => {
        setLocalWishlist(wishlist);
    }, [wishlist]);

    const handleMoveToCart = (item) => {
        moveToCartFromWishlist(item);
        setLocalWishlist(prevWishlist => prevWishlist.filter(w => w.product_id !== item.product_id));
        setTimeout(() => {
            toast.success("Item moved to cart!");
        }, 500); 
    };

    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
        setLocalWishlist(prevWishlist => prevWishlist.filter(w => w.product_id !== productId));
        setTimeout(() => {
            toast.success("Item removed from wishlist!");
        }, 500); 
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
            {localWishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {localWishlist.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-md shadow-md flex items-center wishlist-item">
                            <img src={item.product_image} alt={item.product_title} className="w-32 h-32 object-cover rounded-md mr-4" />
                            <div className="flex-1">
                                <h4 className="font-bold text-lg mb-2">{item.product_title}</h4>
                                <p className="text-sm mb-2">Price: ${item.price}</p>
                                <p className="text-sm mb-2">{item.description}</p>
                                <button
                                    onClick={() => handleMoveToCart(item)}
                                    className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600 mb-2"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => handleRemoveFromWishlist(item.product_id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default WishlistPage;
