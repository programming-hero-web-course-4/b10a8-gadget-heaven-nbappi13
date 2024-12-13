import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const { cart, removeFromCart } = useContext(AppContext);
    const [sortedCart, setSortedCart] = useState([...cart]);

    useEffect(() => {
        setSortedCart(cart);
    }, [cart]);

    const handleRemoveFromCart = (cartId) => {
        removeFromCart(cartId);
        setTimeout(() => {
            toast.success("Item removed from cart!");
        }, 100);
    };

    const handleSortByPrice = () => {
        const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
        setSortedCart(sorted);
        toast.success("Cart items sorted by price!");
    };

    const handlePurchaseAll = () => {
        toast.success("All items purchased successfully!");
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div className="flex justify-between mb-4">
                <p className='mx-auto mr-80 text-xl font-bold'>Total Cost: ${sortedCart.reduce((total, item) => total + item.price, 0)}</p>
                <div className="flex space-x-4">
                    <button
                        onClick={handleSortByPrice}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Sort by Price
                    </button>
                    <button
                        onClick={handlePurchaseAll}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Purchase All
                    </button>
                </div>
            </div>
            {sortedCart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {sortedCart.map((item) => (
                        <div key={item.cartId} className="bg-white p-4 rounded-md shadow-md flex items-center">
                            <img src={item.product_image} alt={item.product_title} className="w-32 h-32 object-cover rounded-md mr-4" />
                            <div className="flex-1">
                                <h4 className="font-bold text-lg mb-2">{item.product_title}</h4>
                                <p className="text-sm mb-2">Price: ${item.price}</p>
                                <p className="text-sm mb-2">{item.description}</p>
                                <button
                                    onClick={() => handleRemoveFromCart(item.cartId)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                                <button className="bg-green-500 text-white px-2 py-1 rounded ml-2">
                                    Purchase
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

export default CartPage;
