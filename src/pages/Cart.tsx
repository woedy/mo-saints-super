import { Link } from "react-router-dom";
import { Minus, Plus, X, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Cart() {
  const {
    items, removeItem, updateQuantity, totalItems,
    subtotal, promoCode, applyPromo, removePromo, discount, total,
  } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const { toast } = useToast();

  const handleApplyPromo = () => {
    if (applyPromo(promoInput)) {
      toast({ title: "Promo Applied", description: "10% discount with MOSAIN10" });
      setPromoInput("");
    } else {
      toast({ title: "Invalid Code", description: "That promo code doesn't exist.", variant: "destructive" });
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: "Cart" }]} />
        <div className="text-center py-20">
          <h1 className="font-serif text-2xl text-foreground mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Explore our collection and find something that grounds you.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Browse Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Cart" }]} />
      <h1 className="font-serif text-3xl text-foreground mb-8">
        Your Cart <span className="text-muted-foreground text-lg">({totalItems})</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const variation = item.product.variations[item.variationIndex];
            return (
              <div
                key={`${item.product.id}-${item.variationIndex}`}
                className="flex gap-4 p-4 border border-border rounded-lg bg-card"
              >
                <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                  <img
                    src={variation.image || item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link to={`/product/${item.product.id}`} className="font-serif text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">{variation.label} — {variation.weight}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.variationIndex)}
                      className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-border rounded-md">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variationIndex, item.quantity - 1)}
                        className="p-1.5 text-muted-foreground hover:text-foreground"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variationIndex, item.quantity + 1)}
                        className="p-1.5 text-muted-foreground hover:text-foreground"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      ${(variation.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-card border border-border rounded-lg p-6 h-fit sticky top-24">
          <h2 className="font-serif text-lg text-foreground mb-4">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">${subtotal.toFixed(2)}</span>
            </div>
            {promoCode && (
              <div className="flex justify-between text-accent">
                <span className="flex items-center gap-1">
                  Discount ({promoCode})
                  <button onClick={removePromo} className="text-destructive text-xs hover:underline">remove</button>
                </span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">Calculated at checkout</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between font-medium">
              <span className="text-foreground">Total</span>
              <span className="text-foreground text-lg">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Promo Code */}
          {!promoCode && (
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Promo code"
                className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                onClick={handleApplyPromo}
                className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
              >
                Apply
              </button>
            </div>
          )}

          <Link
            to="/checkout"
            className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Proceed to Checkout <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
