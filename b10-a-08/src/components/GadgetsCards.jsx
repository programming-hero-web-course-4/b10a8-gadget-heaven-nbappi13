import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const GadgetsCards = ({ products, loadMoreProducts, showMoreButton, noDataMessage }) => {
    const [loading, setLoading] = React.useState(false);

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            loadMoreProducts();
            setLoading(false);
        }, 1000); 
    };

    return (
        <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div 
                        key={product.product_id} 
                        className="p-4 bg-gray-200 rounded-md flex flex-col justify-center items-center shadow-md transition-transform transform hover:scale-105"
                    >
                        <img
                            src={product.product_image}
                            alt={product.product_title}
                            className="w-full h-24 bg-gray-300 rounded mb-4"
                        />
                        <h4 className="font-bold text-sm mb-2">{product.product_title}</h4>
                        <p className="text-sm mb-2">Price: ${product.price}</p>
                        <Link to={`/details/${product.product_id}`}>
                            <button className="text-purple-500 border border-purple-500 rounded px-2 py-1 hover:bg-purple-100 transition-all">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            {noDataMessage && (
                <div className="flex justify-center mt-4">
                    <p className='text-2xl '>No data found! 🤦‍♂️ 😭</p>
                </div>
            )}

            {showMoreButton && !noDataMessage && (
                <div className="flex justify-center mt-4">
                    {loading ? (
                        <Spinner /> 
                    ) : (
                        <button
                            onClick={handleShowMore}
                            className="text-white bg-purple-500 bg-opacity-75 rounded-full px-4 py-2 shadow-lg hover:bg-purple-600 transition-all"
                        >
                            More Products
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default GadgetsCards;
