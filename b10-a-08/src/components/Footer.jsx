import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <footer footer className={`${isHomePage ? 'bg-gray-800' : 'bg-stone-500'} p-4 text-white text-center rounded-2xl`}>
            <div className="text-center mb-8 mt-10">
                <h2 className="text-2xl font-bold">Gadget Heaven</h2>
                <p className="text-sm text-gray-400 mt-3">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className='mx-28' />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left max-w-4xl mx-auto mt-7">
                <div>
                    <h3 className="font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Product Support</a></li>
                        <li><a href="#" className="hover:underline">Order Tracking</a></li>
                        <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                        <li><a href="#" className="hover:underline">Returns</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
