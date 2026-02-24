import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccess() {
  const [params] = useSearchParams();
  const orderId = params.get("order") || "UNKNOWN";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center max-w-lg">
      <div className="animate-fade-in">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
        <h1 className="font-serif text-3xl text-foreground mb-3">Thank You</h1>
        <p className="text-muted-foreground mb-2">
          Your order has been placed successfully.
        </p>
        <p className="text-sm font-medium text-foreground bg-secondary inline-block px-4 py-2 rounded-md mb-6">
          Order #{orderId}
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          This is a demo order. No real payment has been processed. You can view your order history in your account.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/account/orders"
            className="px-6 py-3 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            View Orders
          </Link>
          <Link
            to="/shop"
            className="px-6 py-3 text-sm border border-border text-foreground rounded-md hover:bg-secondary transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
