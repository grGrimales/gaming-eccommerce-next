"use client";

import { Cart } from "@/api/cart";
import { set } from "lodash";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartCtrl = new Cart();
export function CartProvider(props) {
  const { children } = props;
  const [currentStep, setCurrentStep] = useState(1);

  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(cartCtrl.count());

  useEffect(() => {
    const response = cartCtrl.getAll();
    setCart(response);
  }, []);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep === 3) {
      setTimeout(() => {
        setCurrentStep(1);
      }, 3000);
    }
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const addCart = (gameId) => {
    cartCtrl.add(gameId);
    refreshCart();
  };

  const refreshCart = () => {
    setTotal(cartCtrl.count());
    setCart(cartCtrl.getAll());
  };

  const changeQuantityItem = (gameId, quantity) => {
    cartCtrl.changeQuantity(gameId, quantity);
    refreshCart();
  };

  const deleteItem = (gameId) => {
    cartCtrl.deleteItem(gameId);
    refreshCart();
  };

  const deleteAllItems = () => {
    cartCtrl.deleteAllItems();
    refreshCart();
  };

  const data = {
    cart,
    total,
    currentStep,
    nextStep,
    previousStep,
    addCart,
    deleteItem,
    deleteAllItems,
    changeQuantityItem,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
