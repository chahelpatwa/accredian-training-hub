import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLeadForm } from "@/lib/lead-form-context";
import { cn } from "@/lib/utils";

type QA = { q: string; a: string };
type Category = { id: string; label: string; items: QA[] };

const CATEGORIES: Category[] = [
  {
    id: "course",
    label: "About the Course",
    items: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "We deliver tailored programs across leadership, data, AI, product, fintech, operations, and digital transformation — available as certificate, executive, and post-graduate-certificate tracks.",
      },
      {
        q: "What domain specializations are available?",
        a: "Specializations span Product & Innovation, Gen-AI, Tech & Data, Operations Excellence, Digital Enterprise, Fintech, and Leadership Elevation.",
      },
      {
        q: "Can content be customized to our team's needs?",
        a: "Yes — every engagement starts with a skill-gap analysis and produces a curriculum mapped to your roles, levels, and outcomes.",
      },
    ],
  },
  {
    id: "delivery",
    label: "About the Delivery",
    items: [
      {
        q: "Do you support online, offline, and blended formats?",
        a: "Yes. We deliver via our LMS, on-site at your offices, or in a blended cohort model based on your team's preferences.",
      },
      {
        q: "How do you measure training impact?",
        a: "Engagement, assessment scores, project work, and post-program performance metrics are tracked and reported back to your L&D leadership.",
      },
    ],
  },
  {
    id: "misc",
    label: "Miscellaneous",
    items: [
      {
        q: "How do we get started?",
        a: "Click Enquire Now and one of our enterprise advisors will schedule a discovery call within one business day.",
      },
      {
        q: "Do you offer pilot programs?",
        a: "Yes — short-format pilots are available so your team can validate fit before scaling organization-wide.",
      },
    ],
  },
];

export const Faq = () => {
  const [activeCat, setActiveCat] = useState(CATEGORIES[0].id);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { openForm } = useLeadForm();

  const current = CATEGORIES.find((c) => c.id === activeCat) ?? CATEGORIES[0];

  return (
    <section id="faqs" className="section-pad">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Everything enterprise leaders ask before partnering with us.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <Reveal>
            <ul className="flex gap-2 overflow-x-auto rounded-xl border border-divider bg-card p-2 shadow-soft lg:flex-col lg:gap-1">
              {CATEGORIES.map((c) => {
                const active = c.id === activeCat;
                return (
                  <li key={c.id} className="shrink-0 lg:shrink">
                    <button
                      onClick={() => {
                        setActiveCat(c.id);
                        setOpenIdx(0);
                      }}
                      className={cn(
                        "w-full whitespace-nowrap rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition",
                        active
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "text-foreground/70 hover:bg-primary-soft hover:text-primary"
                      )}
                      aria-pressed={active}
                    >
                      {c.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Accordion */}
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-divider bg-card p-2 shadow-soft sm:p-4">
              <ul className="divide-y divide-divider">
                {current.items.map((item, i) => {
                  const open = openIdx === i;
                  return (
                    <li key={item.q}>
                      <button
                        onClick={() => setOpenIdx(open ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                        aria-expanded={open}
                      >
                        <span className="text-base font-semibold text-foreground sm:text-lg">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                            open ? "rotate-180" : "rotate-0"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid overflow-hidden transition-all duration-300",
                          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="min-h-0">
                          <p className="px-4 pb-5 text-sm text-muted-foreground sm:text-base">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6">
              <button
                onClick={openForm}
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90"
              >
                Enquire Now
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
