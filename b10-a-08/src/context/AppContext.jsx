import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [cart, wishlist]);

    const addToCart = (product) => {
        const item = { ...product, cartId: Date.now() }; 
        setCart([...cart, item]);
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

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.product_id !== productId);
        setWishlist(updatedWishlist);
    };

    const moveToCartFromWishlist = (product) => {
        removeFromWishlist(product.product_id);
        addToCart(product);
    };

    return (
        <AppContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart, removeFromWishlist, moveToCartFromWishlist }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
