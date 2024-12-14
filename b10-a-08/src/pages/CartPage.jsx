import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../components/Modal/Modal';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useContext(AppContext);
    const [sortedCart, setSortedCart] = useState([...cart]);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalImage, setModalImage] = useState('');
    const [isRedirecting, setIsRedirecting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setSortedCart(cart);
    }, [cart]);

    const handleRemoveFromCart = (cartId) => {
        removeFromCart(cartId);
        setTimeout(() => {
            toast.success("Item removed from cart!");
        }, 100);
    };

    const handleSortByPrice = () => {
        const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
        setSortedCart(sorted);
        toast.success("Cart items sorted by price!");
    };

    const handlePurchase = (item) => {
        setModalMessage(`🎉 Congratulations! You purchased ${item.product_title}!`);
        setModalImage(item.product_image);
        setShowModal(true);
        removeFromCart(item.cartId);
    };

    const handlePurchaseAll = () => {
        setModalMessage(`🎉 Congratulations! You purchased all ${sortedCart.length} items! 🛒`);
        setModalImage('');
        setShowModal(true);
        clearCart();
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsRedirecting(true);
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };

    return (
        <div className={`container mx-auto p-6 ${isRedirecting ? 'fade-out' : ''}`}>
            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div className="flex justify-between mb-4">
                <p className='mx-auto mr-80 text-xl font-bold'>Total Cost: ${sortedCart.reduce((total, item) => total + item.price, 0)}</p>
                <div className="flex space-x-4">
                    <button
                        onClick={handleSortByPrice}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Sort by Price
                    </button>
                    <button
                        onClick={handlePurchaseAll}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        disabled={sortedCart.length === 0}
                    >
                        Purchase All
                    </button>
                </div>
            </div>
            {sortedCart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {sortedCart.map((item) => (
                        <div key={item.cartId} className="bg-white p-4 rounded-md shadow-md flex items-center card-item">
                            <img 
                                src={item.product_image} 
                                alt={item.product_title} 
                                className="w-32 h-32 object-cover rounded-md" 
                            />
                            <div className="flex-1 px-4">
                                <h4 className="font-bold text-lg mb-2">{item.product_title}</h4>
                                <p className="text-sm mb-2">Price: ${item.price}</p>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <button
                                    onClick={() => handleRemoveFromCart(item.cartId)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                                <button
                                    onClick={() => handlePurchase(item)}
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showModal && (
                <Modal message={modalMessage} image={modalImage} onClose={sortedCart.length === 0 ? handleCloseModal : () => setShowModal(false)} />
            )}

            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default CartPage;
