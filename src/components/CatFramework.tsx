import { Brain, Layers3, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Step = { title: string; desc: string; Icon: LucideIcon };

const STEPS: Step[] = [
  { title: "Concept", desc: "Build foundational understanding through expert-led theory.", Icon: Brain },
  { title: "Application", desc: "Translate ideas into practice with real scenarios.", Icon: Layers3 },
  { title: "Tools", desc: "Master industry-grade tools for execution at scale.", Icon: Wrench },
];

export const CatFramework = () => (
  <section id="cat" className="section-pad">
    <div className="container-tight">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          The <span className="text-primary">CAT Framework</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Our Proven Approach to Learning Excellence
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* S-curve SVG (desktop only) */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 md:block"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          width="100%"
          height="200"
        >
          <path
            d="M 120 100 C 280 -20, 380 220, 500 100 S 720 -20, 880 100"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>

        <ul className="relative grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <li className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated ring-8 ring-primary-soft">
                  <s.Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
