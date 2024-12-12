import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const { cart, removeFromCart } = useContext(AppContext);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        toast.success("Item removed from cart!");
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cart.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-md shadow-md">
                            <img src={item.product_image} alt={item.product_title} className="w-full h-24 object-cover mb-4 rounded-md" />
                            <h4 className="font-bold text-sm mb-2">{item.product_title}</h4>
                            <p className="text-sm mb-2">Price: ${item.price}</p>
                            <button
                                onClick={() => handleRemoveFromCart(item.product_id)}
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
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

export default CartPage;
