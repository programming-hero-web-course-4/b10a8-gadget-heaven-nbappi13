import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishlistPage = () => {
    const { wishlist, moveToCartFromWishlist, removeFromWishlist } = useContext(AppContext);

    const handleMoveToCart = (item) => {
        moveToCartFromWishlist(item);
        toast.success("Item moved to cart!");
    };

    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
        toast.success("Item removed from wishlist!");
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {wishlist.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-md shadow-md">
                            <img src={item.product_image} alt={item.product_title} className="w-full h-24 object-cover mb-4 rounded-md" />
                            <h4 className="font-bold text-sm mb-2">{item.product_title}</h4>
                            <p className="text-sm mb-2">Price: ${item.price}</p>
                            <button
                                onClick={() => handleMoveToCart(item)}
                                className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600 mb-2"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => handleRemoveFromWishlist(item.product_id)}
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-3"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default WishlistPage;
