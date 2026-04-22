import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLeadForm } from "@/lib/lead-form-context";

const PILLS = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

export const Hero = () => {
  const { openForm } = useLeadForm();

  return (
    <section id="home" className="pt-24 md:pt-28">
      <div className="container-tight">
        <div className="overflow-hidden rounded-3xl bg-primary-soft px-6 py-12 sm:px-10 md:px-14 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <Reveal>
              <p className="mb-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
                Enterprise Training
              </p>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
                Next-Gen <span className="text-primary">Expertise</span> For Your{" "}
                <span className="text-primary">Enterprise</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                Cultivate high-performance teams through expert learning.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {PILLS.map((p) => (
                  <li
                    key={p}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-foreground shadow-soft"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-green text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <button
                  onClick={openForm}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elevated transition hover:bg-primary/90"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>

            {/* Right — placeholder image area */}
            <Reveal delay={0.15}>
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-white shadow-elevated">
                <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1">
                  <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/20" />
                    <p className="mt-3 px-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Professional A
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/10 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/30" />
                    <p className="mt-3 px-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Professional B
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute bottom-4 right-4 rounded-lg bg-white px-3 py-2 text-xs font-medium text-muted-foreground shadow-soft">
                  [ image placeholder ]
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
