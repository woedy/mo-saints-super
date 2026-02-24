import aboutImage from "@/assets/about-brand.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutImage} alt="Mo Saints salt collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h1 className="font-serif text-3xl sm:text-5xl text-salt-white">Our Story</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-3xl">
        <Breadcrumbs items={[{ label: "About" }]} />

        <div className="prose-sm space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg text-foreground font-serif">
            Mo Saints began with a question: what if wellness started at the ground level?
          </p>

          <p>
            Not in a lab. Not in a factory. But in the earth itself — in the salt beds 
            that have existed for millennia, in the mineral deposits that the land has been 
            holding long before we thought to look for them.
          </p>

          <p>
            We are not a spa brand. We are not a luxury brand. We are an earth brand. 
            Our products come from the ground, are packed by hand, and are designed to be 
            used with intention — not consumed without thought.
          </p>

          <h2 className="font-serif text-2xl text-foreground pt-4">Earth · Simplicity · Balance</h2>

          <p>
            These three words guide everything we do. <strong className="text-foreground">Earth</strong> is our source — 
            every Mo Saints product begins with raw, natural minerals drawn from ancient deposits. 
            <strong className="text-foreground"> Simplicity</strong> is our method — we don't add what isn't needed. 
            No artificial fragrances, no synthetic preservatives, no excessive packaging. 
            <strong className="text-foreground"> Balance</strong> is our goal — not perfection, not optimization, 
            just a steady, grounded way of living.
          </p>

          <h2 className="font-serif text-2xl text-foreground pt-4">The Name</h2>

          <p>
            "Mo Saints" is a play on what we believe: that everyone can have more of what 
            makes them feel whole. Saints isn't about religion — it's about reverence. 
            Reverence for the earth, for stillness, for the rituals that keep us grounded 
            in a world that moves too fast.
          </p>

          <h2 className="font-serif text-2xl text-foreground pt-4">Our Packaging</h2>

          <p>
            Every Mo Saints product is packaged in natural, artisan-made materials — woven 
            jute sacks, hand-stitched pouches, recycled glass jars, and unbleached cotton wraps. 
            We work with local craftspeople who understand that the way something arrives is 
            part of the experience. Our packaging is designed to be kept, reused, or returned 
            to the earth without guilt.
          </p>

          <h2 className="font-serif text-2xl text-foreground pt-4">What We Don't Do</h2>

          <p>
            We don't make medical claims. We don't promise transformation overnight. 
            We don't tell you how to live. We offer natural salt, gathered with care, 
            and a few gentle suggestions for how it might be part of your daily rhythm. 
            The rest is yours.
          </p>
        </div>
      </div>
    </div>
  );
}
