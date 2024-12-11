import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/banner.jpg'; 

const Banner = () => {
    return (
        <div className="relative bg-purple-500 text-white py-16 px-8 rounded-b-xl">
            <div className="container mx-auto text-center">
               <div className='mb-44'>
                 <h1 className="text-4xl font-bold mb-4 mx-72">
                    Upgrade Your Tech Accessories with Gadget Heaven
                </h1>
                <p className="text-lg mb-6 mx-64">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <Link to="/dashboard">
                    <button className="bg-white text-purple-500 font-semibold py-2 px-6 rounded-full hover:bg-lime-400 transition-all">
                        Shop Now
                    </button>
                </Link>
               </div>
                <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
                    <img
                        src={bannerImage} 
                        alt="VR Headset"
                        className="mx-auto rounded-lg shadow-xl w-3/4 h-[430px] transform hover:scale-105 transition-all"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
