import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-salt.jpg";
import ritualImage from "@/assets/ritual-bath.jpg";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Index() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] sm:h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Natural rock salt crystals on woven jute fabric"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl animate-fade-in">
            <p className="text-salt-white/80 text-sm tracking-[0.2em] uppercase mb-4 font-body">
              Earth-Based Wellness
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-salt-white leading-tight mb-6">
              Grounded in Salt.
              <br />
              Rooted in Earth.
            </h1>
            <p className="text-salt-white/80 text-base sm:text-lg mb-8 max-w-md font-body leading-relaxed">
              Mo Saints brings you natural salt, gathered with care and packaged with intention. For your bath, your space, your daily rituals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Shop All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/rituals"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-salt-white/10 backdrop-blur-sm text-salt-white font-medium text-sm rounded-md border border-salt-white/20 hover:bg-salt-white/20 transition-colors"
              >
                Explore Rituals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Our Philosophy</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
            Earth · Simplicity · Balance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe wellness doesn't need to be complicated. It begins with what the earth already provides — 
            mineral-rich salt, gathered with respect, and offered without excess. Mo Saints is not about fixing. 
            It's about returning.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Curated</p>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Featured Products</h2>
            </div>
            <Link
              to="/shop"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Ritual CTA */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ritualImage} alt="Salt ritual bath" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-lg mx-auto animate-fade-in">
            <p className="text-salt-white/70 text-xs tracking-[0.2em] uppercase mb-3">Ritual Guides</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-salt-white mb-4">
              Salt Is a Practice
            </h2>
            <p className="text-salt-white/80 mb-6 leading-relaxed">
              Discover three grounding rituals — for your bath, your space, and your daily stillness.
            </p>
            <Link
              to="/rituals"
              className="inline-flex items-center gap-2 px-6 py-3 bg-salt-white text-foreground font-medium text-sm rounded-md hover:bg-salt-white/90 transition-colors"
            >
              Read the Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="py-16 sm:py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="font-serif text-xl sm:text-2xl text-muted-foreground italic">
            "Buy Mo Saints, Have More Saints"
          </p>
        </div>
      </section>
    </div>
  );
}
