import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartPage from './CartPage';
import WishlistPage from './WishlistPage';

const Dashboard = () => {
    const { cart, wishlist } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [isCartPage, setIsCartPage] = useState(location.pathname === '/dashboard/cart');

    useEffect(() => {
        if (location.pathname === '/dashboard/cart') {
            setIsCartPage(true);
        } else if (location.pathname === '/dashboard/wishlist') {
            setIsCartPage(false);
        } else {
            navigate('/dashboard/cart');
        }
    }, [location, navigate]);

    const [cartToastDisplayed, setCartToastDisplayed] = useState(false);
    const [wishlistToastDisplayed, setWishlistToastDisplayed] = useState(false);

    useEffect(() => {
        if (cart.length && !location.pathname.includes('/dashboard') && !cartToastDisplayed) {
            toast.success("Cart updated!");
            setCartToastDisplayed(true);
        }
        if (wishlist.length && !location.pathname.includes('/dashboard') && !wishlistToastDisplayed) {
            toast.success("Wishlist updated!");
            setWishlistToastDisplayed(true);
        }
    }, [cart, wishlist, location, cartToastDisplayed, wishlistToastDisplayed]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            <div className="w-full bg-gradient-to-b from-purple-300 to-purple-500 flex flex-col items-center py-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-white">Dashboard</h1>
                <p className="text-lg mb-6 text-center text-white mx-64">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                
                <div className="flex space-x-4 mb-6 justify-center">
                    <NavLink
                        to="/dashboard/cart"
                        className={`px-8 py-4 rounded-full text-xl ${isCartPage ? 'bg-orange-300 text-white' : 'bg-gray-100'}`}
                    >
                        Cart
                    </NavLink>
                    <NavLink
                        to="/dashboard/wishlist"
                        className={`px-8 py-4 rounded-full text-xl ${!isCartPage ? 'bg-orange-300 text-white' : 'bg-gray-100'}`}
                    >
                        Wishlist
                    </NavLink>
                </div>
            </div>

            {isCartPage ? (
                <CartPage />
            ) : (
                <WishlistPage />
            )}
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Dashboard;
