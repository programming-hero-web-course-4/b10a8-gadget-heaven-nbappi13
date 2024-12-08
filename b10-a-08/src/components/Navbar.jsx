import { NavLink } from 'react-router-dom';
import { SiEngadget } from "react-icons/si";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [activeRoute, setActiveRoute] = useState(""); // Track active route

    // Reset active state on reload
    useEffect(() => {
        const handleReload = () => {
            setActiveRoute(""); // Clear active route
        };

        // Add the event listener
        window.addEventListener("beforeunload", handleReload);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("beforeunload", handleReload);
        };
    }, []);

    const handleLinkClick = (route) => {
        setActiveRoute(route); // Update active route when a link is clicked
    };

    return (
        <nav className="bg-gray-800 p-4">
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
                        onClick={() => handleLinkClick("/")}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={activeRoute === "/statistics" ? "text-green-500 font-bold" : "text-white"}
                        onClick={() => handleLinkClick("/statistics")}
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={activeRoute === "/dashboard" ? "text-green-500 font-bold" : "text-white"}
                        onClick={() => handleLinkClick("/dashboard")}
                    >
                        Dashboard
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
