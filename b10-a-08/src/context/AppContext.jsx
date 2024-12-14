import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [cart, wishlist]);

    const addToCart = (product) => {
        const totalCartValue = cart.reduce((total, item) => total + item.price, 0);
        if (totalCartValue + product.price > 1000) {
            toast.error("Cart limit exceeded!");
            return false;
        }
        const item = { ...product, cartId: Date.now() }; 
        setCart([...cart, item]);
        return true;
    };

    const addToWishlist = (product) => {
        if (!wishlist.some(item => item.product_id === product.product_id)) {
            setWishlist([...wishlist, product]);
        }
    };

    const removeFromCart = (cartId) => {
        const updatedCart = cart.filter(item => item.cartId !== cartId);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.product_id !== productId);
        setWishlist(updatedWishlist);
    };

    const moveToCartFromWishlist = (product) => {
        const totalCartValue = cart.reduce((total, item) => total + item.price, 0);
        if (totalCartValue + product.price > 1000) {
            toast.error("Cart limit exceeded!");
            return false;
        }
        removeFromWishlist(product.product_id);
        const item = { ...product, cartId: Date.now() }; 
        setCart([...cart, item]);
        return true;
    };

    return (
        <AppContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart, clearCart, removeFromWishlist, moveToCartFromWishlist }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
