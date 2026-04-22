import { ClipboardList, Settings2, Send, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Step = { title: string; desc: string; Icon: LucideIcon };

const STEPS: Step[] = [
  {
    title: "Skill Gap Analysis",
    desc: "We benchmark your team's capabilities against business goals to surface high-impact training priorities.",
    Icon: ClipboardList,
  },
  {
    title: "Customized Training Plan",
    desc: "A bespoke curriculum mapped to roles, levels, and outcomes — built collaboratively with your L&D team.",
    Icon: Settings2,
  },
  {
    title: "Flexible Program Delivery",
    desc: "Online, offline, or blended formats with continuous measurement of engagement and ROI.",
    Icon: Send,
  },
];

export const DeliveryProcess = () => (
  <section id="how" className="section-pad bg-primary-soft/40">
    <div className="container-tight">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          How We Deliver <span className="text-primary">Results That Matter</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          A repeatable, accountable engagement model.
        </p>
      </Reveal>

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <li className="h-full rounded-2xl border border-divider bg-card p-8 text-center shadow-soft transition hover:shadow-elevated">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
                <s.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
