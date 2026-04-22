import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail, MapPin, ArrowRight } from "lucide-react";
import { useLeadForm } from "@/lib/lead-form-context";

const SOCIALS = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

export const Footer = () => {
  const { openForm } = useLeadForm();
  return (
    <footer className="border-t border-divider bg-card">
      <div className="container-tight py-14">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start leading-none">
              <span className="text-2xl font-extrabold lowercase tracking-tight text-primary">
                accredian
              </span>
              <span className="mt-1 text-[11px] font-medium tracking-wide text-muted-foreground">
                credentials that matter
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              Enterprise training built for measurable business outcomes.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-divider text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accredian links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Accredian
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {["About", "Blog", "Why Accredian"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted-foreground transition hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:enterprise@accredian.com" className="hover:text-primary">
                  enterprise@accredian.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Accredian HQ, 4th Floor, Corporate Tower,
                  <br />
                  Sector 32, Gurugram, India
                </span>
              </li>
            </ul>
          </div>

          {/* CTA card */}
          <div className="rounded-2xl border border-divider bg-primary-soft/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Speak with our Advisor
            </p>
            <p className="mt-2 text-base font-bold text-foreground">
              Ready to upskill your enterprise?
            </p>
            <button
              onClick={openForm}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90"
            >
              Enquire Now <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-divider">
        <div className="container-tight flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Accredian — A Brand of FullStack Education Pvt Ltd. All Rights Reserved.</p>
          <p>credentials that matter.</p>
        </div>
      </div>
    </footer>
  );
};
