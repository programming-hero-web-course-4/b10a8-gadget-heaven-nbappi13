// src/pages/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-purple-500 text-white p-8 rounded-b-xl">
            <div className="container mx-auto text-center">
                {/* Banner Content */}
                <h1 className="text-4xl font-bold mb-4 mx-72">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="text-lg mb-6 mx-64">
                    Explore the latest gadgets that will take your experience to the next level. 
                    From smart devices to the coolest accessories, we have it all!
                </p>
                {/* Button to navigate to Dashboard */}
                <Link to="/dashboard">
                    <button className="bg-white text-purple-500 font-semibold py-2 px-6 rounded-full hover:bg-lime-400">
                        Shop Now
                    </button>
                </Link>
                {/* Image */}
                <div className="mt-8">
                    <img
                        src="/src/assets/banner.jpg" // Replace with your actual image path
                        alt="VR Headset"
                        className="mx-auto rounded-lg shadow-lg w-3/4 h-[430px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
