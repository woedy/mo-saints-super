import { rituals } from "@/data/rituals";
import Breadcrumbs from "@/components/Breadcrumbs";
import ritualImage from "@/assets/ritual-bath.jpg";

export default function Rituals() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[35vh] sm:h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={ritualImage} alt="Salt ritual" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h1 className="font-serif text-3xl sm:text-5xl text-salt-white">Ritual Guide</h1>
          <p className="text-salt-white/80 mt-2 max-w-lg">
            Three grounding practices to bring intention into your daily life with Mo Saints salt.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Breadcrumbs items={[{ label: "Rituals" }]} />

        <div className="space-y-16">
          {rituals.map((ritual, idx) => (
            <article key={ritual.id} className="max-w-3xl animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="mb-6">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Ritual {idx + 1}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-1">
                  {ritual.title}
                </h2>
                <p className="text-muted-foreground italic">{ritual.subtitle}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {ritual.description}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-6">
                <span className="px-3 py-1 bg-secondary rounded-full">⏱ {ritual.duration}</span>
                <span className="px-3 py-1 bg-secondary rounded-full">🔄 {ritual.frequency}</span>
                <span className="px-3 py-1 bg-secondary rounded-full">🧂 {ritual.saltRecommendation}</span>
              </div>

              <div className="mb-6">
                <h3 className="font-serif text-lg text-foreground mb-3">Steps</h3>
                <ol className="space-y-3">
                  {ritual.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-secondary/50 rounded-lg p-5">
                <h3 className="font-serif text-sm font-semibold text-foreground mb-2">⚠ Safety Notes</h3>
                <ul className="space-y-1">
                  {ritual.safetyNotes.map((note, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                      <span>•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {idx < rituals.length - 1 && <div className="border-b border-border mt-12" />}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
