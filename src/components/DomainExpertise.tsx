import {
  Rocket,
  Sparkles,
  Crown,
  Database,
  Cog,
  Building2,
  Banknote,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

type Domain = { title: string; Icon: LucideIcon };

const DOMAINS: Domain[] = [
  { title: "Product & Innovation Hub", Icon: Rocket },
  { title: "Gen-AI Mastery", Icon: Sparkles },
  { title: "Leadership Elevation", Icon: Crown },
  { title: "Tech & Data Insights", Icon: Database },
  { title: "Operations Excellence", Icon: Cog },
  { title: "Digital Enterprise", Icon: Building2 },
  { title: "Fintech Innovation Lab", Icon: Banknote },
];

export const DomainExpertise = () => (
  <section className="section-pad bg-primary-soft/40">
    <div className="container-tight">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Our <span className="text-primary">Domain Expertise</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Specialized Programs Designed to Fuel Innovation
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {DOMAINS.slice(0, 6).map((d, i) => (
          <Reveal key={d.title} delay={i * 0.06}>
            <DomainCard {...d} />
          </Reveal>
        ))}
      </div>

      {/* Last card centered on its own row */}
      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3">
        <div className="hidden md:block" />
        <Reveal delay={0.4}>
          <DomainCard {...DOMAINS[6]} />
        </Reveal>
        <div className="hidden md:block" />
      </div>
    </div>
  </section>
);

const DomainCard = ({ title, Icon }: Domain) => (
  <article className="group flex h-full flex-col items-start gap-4 rounded-xl border border-divider bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-base font-bold leading-snug text-foreground">{title}</h3>
  </article>
);
