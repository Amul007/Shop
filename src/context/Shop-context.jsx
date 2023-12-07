import React, {createContext, useState} from 'react';
import { PRODUCTS } from '../products';
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    };
    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : newAmount}))
    };
 
    const ContextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount};
    console.log(cartItems)
    return (
        <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>
    )
}
