import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  sizeIndex: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, sizeIndex: number, quantity?: number) => void;
  removeItem: (productId: string, sizeIndex: number) => void;
  updateQuantity: (productId: string, sizeIndex: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  promoCode: string | null;
  applyPromo: (code: string) => boolean;
  removePromo: () => void;
  discount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function loadCart(): CartItem[] {
  try {
    const data = localStorage.getItem("mosains-cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);
  const [promoCode, setPromoCode] = useState<string | null>(
    localStorage.getItem("mosains-promo")
  );

  useEffect(() => {
    localStorage.setItem("mosains-cart", JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product: Product, sizeIndex: number, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.sizeIndex === sizeIndex
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.sizeIndex === sizeIndex
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, sizeIndex, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string, sizeIndex: number) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.sizeIndex === sizeIndex))
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, sizeIndex: number, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, sizeIndex);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.product.id === productId && i.sizeIndex === sizeIndex
            ? { ...i, quantity }
            : i
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce(
    (sum, i) => sum + i.product.sizes[i.sizeIndex].price * i.quantity,
    0
  );

  const applyPromo = useCallback((code: string) => {
    if (code.toUpperCase() === "MOSAIN10") {
      setPromoCode("MOSAIN10");
      localStorage.setItem("mosains-promo", "MOSAIN10");
      return true;
    }
    return false;
  }, []);

  const removePromo = useCallback(() => {
    setPromoCode(null);
    localStorage.removeItem("mosains-promo");
  }, []);

  const discount = promoCode === "MOSAIN10" ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <CartContext.Provider
      value={{
        items, addItem, removeItem, updateQuantity, clearCart,
        totalItems, subtotal, promoCode, applyPromo, removePromo, discount, total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
