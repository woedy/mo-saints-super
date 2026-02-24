import React, { createContext, useContext, useState, useCallback } from "react";
import type { CartItem } from "./CartContext";

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  date: string;
  status: "processing" | "shipped" | "delivered";
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    zip: string;
    country: string;
  };
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "date" | "status">) => string;
  getOrder: (id: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

function loadOrders(): Order[] {
  try {
    const data = localStorage.getItem("mosains-orders");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function generateOrderId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "MS-";
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(loadOrders);

  const addOrder = useCallback((orderData: Omit<Order, "id" | "date" | "status">) => {
    const order: Order = {
      ...orderData,
      id: generateOrderId(),
      date: new Date().toISOString(),
      status: "processing",
    };
    setOrders((prev) => {
      const next = [order, ...prev];
      localStorage.setItem("mosains-orders", JSON.stringify(next));
      return next;
    });
    return order.id;
  }, []);

  const getOrder = useCallback(
    (id: string) => orders.find((o) => o.id === id),
    [orders]
  );

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrders must be used within OrderProvider");
  return ctx;
}
