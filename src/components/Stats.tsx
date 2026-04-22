import { Reveal } from "./Reveal";

const STATS = [
  { number: "10K+", label: "Professionals Trained", desc: "For Exceptional Career Success" },
  { number: "200+", label: "Sessions Delivered", desc: "With Unmatched Learning Excellence" },
  { number: "5K+", label: "Active Learners", desc: "Engaged In Dynamic Courses" },
];

export const Stats = () => (
  <section id="stats" className="section-pad">
    <div className="container-tight">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Our <span className="text-primary">Track Record</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          The Numbers Behind Our Success
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <article className="rounded-2xl border border-divider bg-card p-8 shadow-soft transition hover:shadow-elevated">
              <span className="inline-flex items-center rounded-full bg-primary-soft px-4 py-1.5 text-2xl font-extrabold tracking-tight text-primary">
                {s.number}
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
