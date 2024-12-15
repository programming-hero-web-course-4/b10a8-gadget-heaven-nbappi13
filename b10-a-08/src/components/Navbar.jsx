import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SiEngadget } from "react-icons/si";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { cart, wishlist } = useContext(AppContext);
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    const navbarBgColor = isHomePage ? 'bg-purple-500' : 'bg-slate-500';

    const handleNavClick = () => {
        toast.dismiss(); 
    };

    return (
        <nav className={`${navbarBgColor} p-4 rounded-t-xl`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <SiEngadget className="text-white text-2xl mr-2" />
                    <div className="text-white text-lg font-bold">Gadget Heaven</div>
                </div>

                <div className="flex space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}
                        onClick={handleNavClick}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/support"
                        className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}
                    >
                        Support
                    </NavLink>
                </div>

                <div className="flex space-x-4">
                    <div className="relative rounded-full bg-white py-2 px-2">
                        <NavLink
                            to="/dashboard/cart"
                            className={({ isActive }) => isActive ? 'text-yellow-400 relative' : 'text-slate-300 relative'}
                            onClick={handleNavClick}
                        >
                            <BsCart3 className="text-xl" />
                            {cart.length > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </NavLink>
                    </div>
                    <div className="relative bg-white rounded-full py-2 px-2">
                        <NavLink
                            to="/dashboard/wishlist"
                            className={({ isActive }) => isActive ? 'text-yellow-400 relative' : 'text-slate-300 relative'}
                        >
                            <FaRegHeart className="text-xl" />
                            {wishlist.length > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    {wishlist.length}
                                </span>
                            )}
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
