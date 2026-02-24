import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Heart, ShoppingBag, Minus, Plus } from "lucide-react";
import { getProduct } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id || "");
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { toast } = useToast();
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl text-foreground mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-primary hover:underline text-sm">
          Return to Shop
        </Link>
      </div>
    );
  }

  const liked = isInWishlist(product.id);
  const selectedSize = product.sizes[sizeIndex];

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem(product, sizeIndex, quantity);
    toast({
      title: "Added to Cart",
      description: `${product.name} (${selectedSize.label}) × ${quantity}`,
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: "Shop", to: "/shop" },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                {product.category.replace("-", " ")}
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl text-foreground mb-2">
                {product.name}
              </h1>
            </div>
            <button
              onClick={() => toggleWishlist(product.id)}
              className="p-2 rounded-full border border-border hover:border-primary transition-colors flex-shrink-0"
              aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={`w-5 h-5 ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`}
              />
            </button>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {product.longDescription}
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="text-sm font-medium text-foreground mb-3">
              Size / Weight
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, i) => (
                <button
                  key={i}
                  onClick={() => setSizeIndex(i)}
                  className={`px-4 py-2 rounded-md text-sm border transition-colors ${
                    sizeIndex === i
                      ? "border-primary bg-primary/5 text-primary font-medium"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {size.label} — {size.weight}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <p className="text-2xl font-serif font-semibold text-foreground mb-6">
            ${selectedSize.price.toFixed(2)}
          </p>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 text-sm font-medium text-foreground">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="w-4 h-4" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Ritual Usage */}
          <div className="border-t border-border pt-6 mb-6">
            <h3 className="font-serif text-lg text-foreground mb-2">Ritual Suggestion</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.ritualUsage}
            </p>
          </div>

          {/* Packaging */}
          <div className="border-t border-border pt-6">
            <h3 className="font-serif text-lg text-foreground mb-2">Packaging</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.packagingStory}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
