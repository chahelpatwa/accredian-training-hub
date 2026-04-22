import { Code2, Briefcase, Sprout, UserCog, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Persona = { title: string; desc: string; Icon: LucideIcon };

const PERSONAS: Persona[] = [
  { title: "Tech Professionals", desc: "Sharpen engineering, data, and architecture skills.", Icon: Code2 },
  { title: "Non-Tech Professionals", desc: "Build digital fluency for modern business roles.", Icon: Briefcase },
  { title: "Emerging Professionals", desc: "Accelerate early-career growth with foundations.", Icon: Sprout },
  { title: "Senior Professionals", desc: "Lead transformation with strategic capability.", Icon: UserCog },
];

export const WhoShouldJoin = () => (
  <section className="section-pad bg-primary text-primary-foreground">
    <div className="container-tight">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          {/* Image placeholder */}
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20">
            <div className="flex h-full w-full flex-col items-center justify-center text-center">
              <div className="h-24 w-24 rounded-full bg-white/15" />
              <p className="mt-4 px-6 text-xs font-semibold uppercase tracking-wider text-white/70">
                [ professional image placeholder ]
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Who Should Join?
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Strategic Skill Enhancement
          </h2>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {PERSONAS.map((p) => (
              <li
                key={p.title}
                className="rounded-xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-white/15"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white ring-1 ring-white/30">
                  <p.Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 text-base font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/75">{p.desc}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);
