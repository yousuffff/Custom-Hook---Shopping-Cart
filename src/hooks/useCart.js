/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

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
};
