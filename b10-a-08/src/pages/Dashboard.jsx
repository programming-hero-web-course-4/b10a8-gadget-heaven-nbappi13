import React, { useContext } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const { cart, wishlist, removeFromCart, removeFromWishlist, moveToCartFromWishlist } = useContext(AppContext);
    const location = useLocation();
    const isCartPage = location.pathname === '/dashboard/cart';

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        toast.success("Item removed from cart!");
    };

    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
        toast.success("Item removed from wishlist!");
    };

    const handleMoveToCart = (item) => {
        moveToCartFromWishlist(item);
        toast.success("Item moved to cart!");
    };

    const totalCost = cart.reduce((total, item) => total + item.price, 0);

    const handleSortByPrice = () => {
        cart.sort((a, b) => b.price - a.price);
        toast.success("Cart items sorted by price!");
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            <p className="text-lg mb-6">See the above image for reference.</p>
            
            <div className="flex space-x-4 mb-6">
                <NavLink
                    to="/dashboard/cart"
                    className={`px-4 py-2 rounded ${isCartPage ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
                >
                    Cart
                </NavLink>
                <NavLink
                    to="/dashboard/wishlist"
                    className={`px-4 py-2 rounded ${!isCartPage ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
                >
                    Wishlist
                </NavLink>
            </div>

            {isCartPage ? (
                <div>
                    <div className="flex justify-between mb-4">
                        <h2 className="text-2xl font-bold">Cart</h2>
                        <div>
                            <p>Total Cost: ${totalCost}</p>
                            <button
                                onClick={handleSortByPrice}
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Sort by Price
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">
                                Purchase All
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cart.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-md shadow-md">
                                <img src={item.product_image} alt={item.product_title} className="w-full h-24 object-cover mb-4 rounded-md" />
                                <h4 className="font-bold text-sm mb-2">{item.product_title}</h4>
                                <p className="text-sm mb-2">Price: ${item.price}</p>
                                <button
                                    onClick={() => handleRemoveFromCart(item.product_id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mb-2"
                                >
                                    Remove
                                </button>
                                <button className="bg-green-500 text-white px-2 py-1 rounded">
                                    Purchase
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
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

export default Dashboard;
