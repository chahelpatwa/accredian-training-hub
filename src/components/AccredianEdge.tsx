import {
  Target,
  UserCheck,
  Lightbulb,
  Cpu,
  Layers,
  Award,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

type Node = { title: string; desc: string; Icon: LucideIcon };

const NODES: Node[] = [
  { title: "Tailored Solutions", desc: "Programs customized to your organization's goals and challenges.", Icon: Target },
  { title: "Expert Guidance", desc: "Learn from industry leaders with real-world success.", Icon: UserCheck },
  { title: "Innovative Framework", desc: "Proprietary methods for impactful, application-driven results.", Icon: Lightbulb },
  { title: "Advanced Technology", desc: "State-of-the-art LMS for seamless learning experiences.", Icon: Cpu },
  { title: "Diverse Offerings", desc: "Courses across industries, skill levels, and emerging fields.", Icon: Layers },
  { title: "Proven Impact", desc: "Trusted by leading organizations for measurable ROI.", Icon: Award },
  { title: "Flexible Delivery", desc: "Online and offline options tailored to your needs.", Icon: Calendar },
];

export const AccredianEdge = () => (
  <section id="edge" className="section-pad">
    <div className="container-tight">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          The <span className="text-primary">Accredian Edge</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Key Aspects of Our Strategic Training
        </p>
      </Reveal>

      {/* Desktop zig-zag timeline */}
      <div className="relative mt-16 hidden lg:block">
        {/* Dashed connecting arcs (decorative SVG) */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[45%] -translate-y-1/2"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          width="100%"
          height="200"
        >
          <path
            d="M 60 100 Q 145 20, 230 100 T 400 100 T 570 100 T 740 100 T 910 100 T 1080 100 T 1140 100"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeOpacity="0.4"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        <ul className="relative grid grid-cols-7 gap-4">
          {NODES.map((n, i) => {
            const top = i % 2 === 0;
            return (
              <li
                key={n.title}
                className={`flex flex-col items-center text-center ${top ? "mb-32" : "mt-32"}`}
              >
                <Reveal delay={i * 0.07}>
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-soft">
                      <n.Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-foreground">{n.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{n.desc}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile/tablet vertical list */}
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
        {NODES.map((n, i) => (
          <Reveal key={n.title} delay={i * 0.05}>
            <li className="flex gap-4 rounded-xl border border-divider bg-card p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary-soft text-primary">
                <n.Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">{n.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{n.desc}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);
