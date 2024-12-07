// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-white text-lg font-bold">MyStore</div>
                </div>
                <div className="flex space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/statistics" className="text-white">Statistics</Link>
                    <Link to="/dashboard" className="text-white">Dashboard</Link>
                </div>
                <div className="flex space-x-4">
                    <button className="text-white">Icon1</button>
                    <button className="text-white">Icon2</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
