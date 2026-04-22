import { GraduationCap, Building, BookOpen, Users, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Course = { title: string; desc: string; tags: string[]; Icon: LucideIcon };

const COURSES: Course[] = [
  {
    title: "Program Specific",
    desc: "Structured pathways across credential tiers.",
    tags: ["Certificate", "Executive", "Post Graduate Certificate"],
    Icon: GraduationCap,
  },
  {
    title: "Industry Specific",
    desc: "Vertical-aligned learning for sector mastery.",
    tags: ["IT", "Healthcare", "Retail", "Finance", "Education", "Manufacturing"],
    Icon: Building,
  },
  {
    title: "Topic Specific",
    desc: "Deep-dive modules into emerging disciplines.",
    tags: ["Machine Learning", "Design", "Analytics", "Cybersecurity", "Cloud"],
    Icon: BookOpen,
  },
  {
    title: "Level Specific",
    desc: "Right-sized to career stage and seniority.",
    tags: ["Senior Leadership", "Mid-Career Professionals", "Freshers"],
    Icon: Users,
  },
];

export const CourseSegmentation = () => (
  <section className="section-pad">
    <div className="container-tight">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Tailored <span className="text-primary">Course Segmentation</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Explore Custom-fit Courses Designed to Address Every Professional Focus
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {COURSES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-divider bg-card shadow-soft transition hover:shadow-elevated">
              {/* Image placeholder */}
              <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                <c.Icon className="h-12 w-12 text-primary" />
                <span className="absolute bottom-2 right-3 text-[10px] font-medium uppercase tracking-wider text-primary/60">
                  [ image ]
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-primary">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
