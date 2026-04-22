import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { scrollToSection, useLeadForm } from "@/lib/lead-form-context";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "stats", label: "Stats" },
  { id: "clients", label: "Clients" },
  { id: "edge", label: "Accredian Edge" },
  { id: "cat", label: "CAT" },
  { id: "how", label: "How It Works" },
  { id: "faqs", label: "FAQs" },
  { id: "testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));
  const { openForm } = useLeadForm();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur transition-shadow",
        scrolled ? "shadow-nav" : "shadow-none"
      )}
    >
      <nav className="container-tight flex h-16 items-center justify-between md:h-20" aria-label="Primary">
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="flex flex-col items-start leading-none"
          aria-label="Accredian home"
        >
          <span className="text-2xl font-extrabold lowercase tracking-tight text-primary md:text-[26px]">
            accredian
          </span>
          <span className="mt-0.5 text-[10px] font-medium tracking-wide text-muted-foreground">
            credentials that matter
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-all duration-300",
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={openForm}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-divider bg-background transition-[max-height] duration-300 lg:hidden",
          mobileOpen ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <ul className="container-tight flex flex-col py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={cn(
                  "flex w-full items-center justify-between border-b border-divider py-3 text-left text-base font-medium",
                  active === item.id ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-4">
            <button
              onClick={() => {
                setMobileOpen(false);
                openForm();
              }}
              className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Enquire Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
