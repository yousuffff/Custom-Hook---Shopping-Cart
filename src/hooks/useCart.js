/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from "react";

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.log("Failed to load cart from local storage", error);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.log("Failed to save cart to local Storage", error);
    }
  }, [cart]);

  //sycn Across tab

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "cart") {
        try {
          const newCart = JSON.parse(e.newValue || "[]");
          setCart[newCart];
        } catch (error) {
          console.log("Failed to parse cart from local storage", error);
        }
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const addToCart = (product) => {
    const existing = currentCart.find((item) => item.id === product.id);
    if (existing) {
      return currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }
    return [...currentCart, { ...product, quantity: 1 }];
  };
  const removeFromCart = (productId) => {
    setCart(currentCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const total = useMemo(() => {
    return Number(
      cart
        .reduce((sum, item) => {
          const itemTotal = item.price * (item.quantity || 0);
        }, 0)
        .toFixed(2),
    );
  }, [cart]);

  return {
    cart,
    total,
    addToCart,
    updateQuantity,
    removeFromCart,
  };
};
