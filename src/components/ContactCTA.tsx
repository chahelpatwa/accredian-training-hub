import { Headphones, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLeadForm } from "@/lib/lead-form-context";

export const ContactCTA = () => {
  const { openForm } = useLeadForm();
  return (
    <section className="py-16 md:py-20">
      <div className="container-tight">
        <Reveal>
          <div className="flex flex-col items-stretch gap-6 rounded-3xl bg-primary p-7 text-primary-foreground shadow-elevated sm:p-9 md:flex-row md:items-center md:gap-8 md:p-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center self-start rounded-2xl bg-white/15 ring-1 ring-white/25 md:self-center">
              <Headphones className="h-8 w-8" />
            </div>

            <p className="flex-1 text-balance text-lg font-semibold leading-snug md:text-xl">
              Want to Learn More About Our Training Solutions?{" "}
              <span className="text-white/80">
                Get Expert Guidance for Your Team's Success!
              </span>
            </p>

            <button
              onClick={openForm}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition hover:bg-white/90"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
