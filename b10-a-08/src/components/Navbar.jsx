import { NavLink, useLocation } from 'react-router-dom';
import { SiEngadget } from "react-icons/si";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';

const Navbar = () => {
    const location = useLocation(); 
    const [activeRoute, setActiveRoute] = useState(location.pathname); 


    useEffect(() => {
        setActiveRoute(location.pathname); 
    }, [location]);

    return (
        <nav className="bg-purple-500 p-4 rounded-t-xl">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <SiEngadget className="text-white text-2xl mr-2" />
                    <div className="text-white text-lg font-bold">Gadget Heaven</div>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-4">
                    <NavLink
                        to="/"
                        className={activeRoute === "/" ? "text-green-500 font-bold" : "text-white"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={activeRoute === "/statistics" ? "text-green-500 font-bold" : "text-white"}
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={activeRoute === "/dashboard" ? "text-green-500 font-bold" : "text-white"}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/support"
                        className={activeRoute === "/support" ? "text-green-500 font-bold" : "text-white"}
                    >
                        Support
                    </NavLink>
                </div>

                {/* Icon Buttons */}
                <div className="flex space-x-4">
                    {/* Cart Icon */}
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-green-600">
                        <button className="text-black">
                            <BsCart3 />
                        </button>
                    </div>
                    {/* Heart Icon */}
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-green-600">
                        <button className="text-black">
                            <FaRegHeart />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
