import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Accredian's program transformed how our engineering org thinks about data. Six months in, we shipped initiatives we'd been stuck on for years.",
    author: "Anita R.",
    role: "VP, Engineering",
    company: "Reliance",
  },
  {
    quote:
      "The bespoke leadership track was exactly what our mid-career managers needed. Engagement scores and 360 reviews moved measurably.",
    author: "Daniel S.",
    role: "Head of L&D",
    company: "HCL",
  },
  {
    quote:
      "From scoping to rollout, the Accredian team operated like an embedded partner. Outcomes were tracked, reported, and exceeded.",
    author: "Priya M.",
    role: "Chief Talent Officer",
    company: "IBM",
  },
  {
    quote:
      "We piloted with one BU and scaled across four within a quarter. Rare to find a vendor with this much rigor.",
    author: "Marc L.",
    role: "Director, Capability",
    company: "ADP",
  },
];

// Show 2 cards per page on desktop, 1 on mobile.
const PAGE_SIZE_DESKTOP = 2;

export const Testimonials = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(TESTIMONIALS.length / PAGE_SIZE_DESKTOP);
  const visible = TESTIMONIALS.slice(
    page * PAGE_SIZE_DESKTOP,
    page * PAGE_SIZE_DESKTOP + PAGE_SIZE_DESKTOP
  );

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section id="testimonials" className="section-pad bg-primary-soft/40">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Testimonials from <span className="text-primary">Our Partners</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            What enterprise leaders say after working with us.
          </p>
        </Reveal>

        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((t, i) => (
              <Reveal key={`${page}-${i}`} delay={i * 0.1}>
                <article className="flex h-full flex-col rounded-2xl border border-divider bg-card p-7 shadow-soft md:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-24 items-center justify-center rounded-md border border-divider bg-white text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {t.company}
                    </div>
                    <Quote className="h-7 w-7 text-primary/30" />
                  </div>
                  <div className="mt-5 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                    "{t.quote}"
                  </p>
                  <footer className="mt-6 border-t border-divider pt-4">
                    <p className="text-sm font-bold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-divider bg-card text-foreground transition hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <ul className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <li key={i}>
                  <button
                    onClick={() => setPage(i)}
                    aria-label={`Go to testimonial page ${i + 1}`}
                    aria-current={i === page}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      i === page ? "w-7 bg-primary" : "w-2.5 bg-foreground/20 hover:bg-foreground/40"
                    )}
                  />
                </li>
              ))}
            </ul>

            <button
              onClick={next}
              aria-label="Next testimonials"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-divider bg-card text-foreground transition hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
