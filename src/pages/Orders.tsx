import { Link } from "react-router-dom";
import { useOrders } from "@/contexts/OrderContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Package } from "lucide-react";

export default function Orders() {
  const { orders } = useOrders();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-2xl">
      <Breadcrumbs items={[{ label: "Account", to: "/account/profile" }, { label: "Orders" }]} />
      <h1 className="font-serif text-3xl text-foreground mb-8">Order History</h1>

      {orders.length === 0 ? (
        <div className="text-center py-16">
          <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No orders yet.</p>
          <Link to="/shop" className="text-sm text-primary hover:underline">Start Shopping</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border border-border rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Order #{order.id}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(order.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent capitalize">
                  {order.status}
                </span>
              </div>
              <div className="space-y-1 mb-3">
                {order.items.map((item, i) => (
                  <p key={i} className="text-xs text-muted-foreground">
                    {item.product.name} ({item.product.sizes[item.sizeIndex].label}) × {item.quantity}
                  </p>
                ))}
              </div>
              <div className="flex justify-between text-sm border-t border-border pt-3">
                <span className="text-muted-foreground">Total</span>
                <span className="font-medium text-foreground">${order.total.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
