"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
};

type CartContextType = {
  items: CartItem[];
  count: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "cantidad">) => void;
  removeItem: (id: string) => void;
  changeQuantity: (id: string, cantidad: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];

    const saved = window.localStorage.getItem("pesca-fishing-cart");
    if (!saved) return [];

    try {
      return JSON.parse(saved);
    } catch {
      window.localStorage.removeItem("pesca-fishing-cart");
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("pesca-fishing-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, "cantidad">) => {
    setItems((current) => {
      const existing = current.find((product) => product.id === item.id);
      if (existing) {
        return current.map((product) =>
          product.id === item.id
            ? { ...product, cantidad: product.cantidad + 1 }
            : product,
        );
      }
      return [...current, { ...item, cantidad: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const changeQuantity = (id: string, cantidad: number) => {
    if (cantidad < 1) {
      removeItem(id);
      return;
    }
    setItems((current) =>
      current.map((item) => item.id === id ? { ...item, cantidad } : item),
    );
  };

  const count = items.reduce((total, item) => total + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
}
