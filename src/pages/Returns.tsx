import Breadcrumbs from "@/components/Breadcrumbs";

export default function Returns() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-3xl">
      <Breadcrumbs items={[{ label: "Returns & Refunds" }]} />
      <h1 className="font-serif text-3xl text-foreground mb-6">Returns & Refunds</h1>
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p className="text-foreground font-medium">
          Demo Policy — In a live Mo Saints store, the following policy would apply:
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Return Window</h2>
        <p>
          We accept returns within 30 days of delivery for unopened products in their 
          original packaging. Opened products may be returned within 14 days if the 
          product is defective or significantly different from its description.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">How to Return</h2>
        <p>
          Contact us at hello@mosaints.earth with your order number and reason for return. 
          We'll provide a return shipping label and instructions within 24 hours.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Refund Processing</h2>
        <p>
          Refunds are processed within 5–7 business days after we receive your return. 
          The refund will be applied to your original payment method. Shipping costs 
          are non-refundable unless the return is due to our error.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Gift Returns</h2>
        <p>
          Gift recipients may exchange products for store credit of equal value. 
          Contact us with the gift order details to initiate an exchange.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Damaged Items</h2>
        <p>
          If your order arrives damaged, please contact us within 48 hours with photos 
          of the damage. We'll arrange a replacement or full refund at no additional cost.
        </p>
      </div>
    </div>
  );
}
