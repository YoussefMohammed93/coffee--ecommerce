"use client";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Ensure this is only run on the client side
    if (typeof window !== "undefined") {
      const savedCartItems = localStorage.getItem("cartItems");
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
      }
    }
  }, []);

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }

    toast.success(`تم إضافة المنتج إلى سلة التسوق.`, {
      position: "bottom-left",
      autoClose: 3000,
    });
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id || cartItem.size !== item.size
    );
    setCartItems(updatedCartItems);

    toast.error(`تم إزالة المنتج من سلة التسوق.`, {
      position: "bottom-left",
      autoClose: 3000,
    });
  };

  const updateCartItemQuantity = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item);
      return;
    }

    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.size === item.size
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    );

    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        notification,
        updateCartItemQuantity,
      }}
    >
      <ToastContainer position="bottom-left" />
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
