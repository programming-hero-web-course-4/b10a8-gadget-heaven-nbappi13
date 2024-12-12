import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <footer className={`${isHomePage ? 'bg-gray-800' : 'bg-stone-500'} p-4 text-white text-center`}>
            <p>&copy; 2024 Gadget Heaven. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
