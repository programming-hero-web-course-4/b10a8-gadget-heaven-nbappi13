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
        setCart([...cart, product]);
    };

    const addToWishlist = (product) => {
        if (!wishlist.some(item => item.product_id === product.product_id)) {
            setWishlist([...wishlist, product]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.product_id === productId);
        if (index !== -1) {
            updatedCart.splice(index, 1);
            setCart(updatedCart);
        }
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
