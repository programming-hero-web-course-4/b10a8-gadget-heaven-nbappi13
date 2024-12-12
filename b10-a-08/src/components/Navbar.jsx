import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SiEngadget } from "react-icons/si";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const { cart, wishlist } = useContext(AppContext);

    return (
        <nav className={`bg-purple-500 p-4 rounded-t-xl`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <SiEngadget className="text-white text-2xl mr-2" />
                    <div className="text-white text-lg font-bold">Gadget Heaven</div>
                </div>

                <div className="flex space-x-4">
                    <NavLink
                        to="/"
                        className="text-white"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className="text-white"
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className="text-white"
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/support"
                        className="text-white"
                    >
                        Support
                    </NavLink>
                </div>

                <div className="flex space-x-4">
                    <div className="relative">
                        <NavLink to="/dashboard/cart" className="text-white">
                            <BsCart3 className="text-xl" />
                            {cart.length > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </NavLink>
                    </div>
                    <div className="relative">
                        <NavLink to="/dashboard/wishlist" className="text-white">
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
