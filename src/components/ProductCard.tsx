import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import type { Product } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const liked = isInWishlist(product.id);
  const basePrice = Math.min(...product.sizes.map((s) => s.price));

  return (
    <div className="group relative animate-fade-in">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-serif text-base font-medium text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>
          <p className="text-sm font-medium text-foreground">
            {product.sizes.length > 1 ? "From " : ""}${basePrice.toFixed(2)}
          </p>
          {!product.inStock && (
            <span className="text-xs text-destructive font-medium">Out of Stock</span>
          )}
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product.id);
        }}
        className="absolute top-2 right-2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            liked ? "fill-primary text-primary" : "text-muted-foreground"
          }`}
        />
      </button>
    </div>
  );
}
