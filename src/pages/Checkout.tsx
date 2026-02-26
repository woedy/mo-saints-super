import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useOrders } from "@/contexts/OrderContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const steps = ["Contact", "Shipping", "Delivery", "Payment", "Review"];

export default function Checkout() {
  const { items, subtotal, discount, total, promoCode, clearCart } = useCart();
  const { addOrder } = useOrders();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(0);

  const [contact, setContact] = useState({ email: "", phone: "" });
  const [shipping, setShipping] = useState({ name: "", address: "", city: "", zip: "", country: "" });
  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState({ card: "", expiry: "", cvv: "" });

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  const deliveryCost = delivery === "express" ? 12.00 : delivery === "standard" ? 5.00 : 0;
  const grandTotal = total + deliveryCost;

  const canNext = () => {
    switch (step) {
      case 0: return contact.email.includes("@") && contact.phone.length > 5;
      case 1: return shipping.name && shipping.address && shipping.city && shipping.zip && shipping.country;
      case 2: return true;
      case 3: return payment.card.length >= 12 && payment.expiry && payment.cvv.length >= 3;
      case 4: return true;
      default: return false;
    }
  };

  const handlePlaceOrder = () => {
    const orderId = addOrder({
      items: [...items],
      subtotal,
      discount,
      total: grandTotal,
      shippingAddress: shipping,
    });
    clearCart();
    toast({ title: "Order Placed!", description: `Order ${orderId} confirmed.` });
    navigate(`/checkout/success?order=${orderId}`);
  };

  const inputClass = "w-full px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-3xl">
      <Breadcrumbs items={[{ label: "Cart", to: "/cart" }, { label: "Checkout" }]} />
      <h1 className="font-serif text-3xl text-foreground mb-8">Checkout</h1>

      {/* Steps */}
      <div className="flex items-center gap-1 mb-10 overflow-x-auto">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-1">
            <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium transition-colors ${
              i < step ? "bg-accent text-accent-foreground" :
              i === step ? "bg-primary text-primary-foreground" :
              "bg-secondary text-muted-foreground"
            }`}>
              {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
            </div>
            <span className={`text-xs hidden sm:inline ${i === step ? "text-foreground font-medium" : "text-muted-foreground"}`}>
              {s}
            </span>
            {i < steps.length - 1 && <div className="w-6 sm:w-10 h-px bg-border" />}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mb-8 animate-fade-in">
        {step === 0 && (
          <div className="space-y-4">
            <h2 className="font-serif text-xl text-foreground mb-4">Contact Information</h2>
            <input type="email" placeholder="Email address" value={contact.email} onChange={e => setContact({...contact, email: e.target.value})} className={inputClass} />
            <input type="tel" placeholder="Phone number" value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})} className={inputClass} />
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="font-serif text-xl text-foreground mb-4">Shipping Address</h2>
            <input placeholder="Full name" value={shipping.name} onChange={e => setShipping({...shipping, name: e.target.value})} className={inputClass} />
            <input placeholder="Street address" value={shipping.address} onChange={e => setShipping({...shipping, address: e.target.value})} className={inputClass} />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="City" value={shipping.city} onChange={e => setShipping({...shipping, city: e.target.value})} className={inputClass} />
              <input placeholder="ZIP / Postal code" value={shipping.zip} onChange={e => setShipping({...shipping, zip: e.target.value})} className={inputClass} />
            </div>
            <input placeholder="Country" value={shipping.country} onChange={e => setShipping({...shipping, country: e.target.value})} className={inputClass} />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="font-serif text-xl text-foreground mb-4">Delivery Method</h2>
            {[
              { id: "standard", label: "Standard Delivery", desc: "5–7 business days", price: "$5.00" },
              { id: "express", label: "Express Delivery", desc: "2–3 business days", price: "$12.00" },
              { id: "pickup", label: "Local Pickup", desc: "Collect from our studio", price: "Free" },
            ].map((opt) => (
              <label key={opt.id} className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
                delivery === opt.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    delivery === opt.id ? "border-primary" : "border-border"
                  }`}>
                    {delivery === opt.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{opt.label}</p>
                    <p className="text-xs text-muted-foreground">{opt.desc}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-foreground">{opt.price}</span>
                <input type="radio" name="delivery" value={opt.id} checked={delivery === opt.id} onChange={() => setDelivery(opt.id)} className="sr-only" />
              </label>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="font-serif text-xl text-foreground mb-4">Payment</h2>
            <input placeholder="Card number" value={payment.card} onChange={e => setPayment({...payment, card: e.target.value})} className={inputClass} />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM/YY" value={payment.expiry} onChange={e => setPayment({...payment, expiry: e.target.value})} className={inputClass} />
              <input placeholder="CVV" value={payment.cvv} onChange={e => setPayment({...payment, cvv: e.target.value})} className={inputClass} />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="font-serif text-xl text-foreground mb-4">Review Your Order</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.variationIndex}`} className="flex justify-between text-sm">
                  <span className="text-foreground">
                    {item.product.name} ({item.product.variations[item.variationIndex].label}) × {item.quantity}
                  </span>
                  <span className="text-foreground font-medium">
                    ${(item.product.variations[item.variationIndex].price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              {discount > 0 && <div className="flex justify-between text-accent"><span>Discount ({promoCode})</span><span>-${discount.toFixed(2)}</span></div>}
              <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>${deliveryCost.toFixed(2)}</span></div>
              <div className="flex justify-between font-medium text-base border-t border-border pt-2"><span>Total</span><span>${grandTotal.toFixed(2)}</span></div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p><strong className="text-foreground">Ship to:</strong> {shipping.name}, {shipping.address}, {shipping.city} {shipping.zip}, {shipping.country}</p>
              <p><strong className="text-foreground">Contact:</strong> {contact.email}</p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-5 py-2.5 text-sm border border-border rounded-md text-foreground hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Back
        </button>
        {step < 4 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!canNext()}
            className="px-6 py-2.5 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handlePlaceOrder}
            className="px-6 py-2.5 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
}
