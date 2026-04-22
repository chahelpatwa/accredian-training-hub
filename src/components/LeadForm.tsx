import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLeadForm } from "@/lib/lead-form-context";
import { cn } from "@/lib/utils";

type FormValues = {
  fullName: string;
  workEmail: string;
  phone: string;
  company: string;
  teamSize: "" | "1-10" | "11-50" | "51-200" | "200+";
  message: string;
};

const TEAM_SIZES = ["1-10", "11-50", "51-200", "200+"] as const;

export const LeadForm = () => {
  const { open, closeForm } = useLeadForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      workEmail: "",
      phone: "",
      company: "",
      teamSize: "",
      message: "",
    },
  });

  // Lock body scroll while open + ESC to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeForm();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeForm]);

  const onSubmit = async (values: FormValues) => {
    try {
      // POST to a notional /api/leads — gracefully handle missing endpoint in preview.
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).catch(() => null);

      // Treat non-2xx or network failure as "success" in this static preview,
      // but still surface real server errors when present.
      if (res && !res.ok && res.status >= 500) {
        throw new Error(`Server responded with ${res.status}`);
      }

      toast.success("Thanks! Our team will reach out within 1 business day.");
      reset();
      closeForm();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong submitting your request. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <button
        aria-label="Close form"
        onClick={closeForm}
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-background shadow-elevated">
        <div className="flex items-start justify-between border-b border-divider bg-primary-soft/60 px-6 py-5">
          <div>
            <h3 id="lead-form-title" className="text-xl font-bold text-foreground">
              Talk to an Enterprise Advisor
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us about your team. We'll respond within 1 business day.
            </p>
          </div>
          <button
            onClick={closeForm}
            aria-label="Close"
            className="rounded-md p-1.5 text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-6 py-6">
          <Field label="Full Name" error={errors.fullName?.message}>
            <input
              {...register("fullName", {
                required: "Full name is required",
                maxLength: { value: 100, message: "Max 100 characters" },
              })}
              className={inputCls(!!errors.fullName)}
              placeholder="Jane Doe"
              autoComplete="name"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Work Email" error={errors.workEmail?.message}>
              <input
                type="email"
                {...register("workEmail", {
                  required: "Work email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                  maxLength: { value: 255, message: "Max 255 characters" },
                })}
                className={inputCls(!!errors.workEmail)}
                placeholder="jane@company.com"
                autoComplete="email"
              />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: { value: /^[+\d\s()-]{7,20}$/, message: "Invalid phone" },
                })}
                className={inputCls(!!errors.phone)}
                placeholder="+1 555 123 4567"
                autoComplete="tel"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Company Name" error={errors.company?.message}>
              <input
                {...register("company", {
                  required: "Company is required",
                  maxLength: { value: 120, message: "Max 120 characters" },
                })}
                className={inputCls(!!errors.company)}
                placeholder="Acme Inc."
                autoComplete="organization"
              />
            </Field>
            <Field label="Team Size" error={errors.teamSize?.message}>
              <select
                {...register("teamSize", { required: "Please select a team size" })}
                className={inputCls(!!errors.teamSize)}
                defaultValue=""
              >
                <option value="" disabled>
                  Select…
                </option>
                {TEAM_SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Message" error={errors.message?.message}>
            <textarea
              {...register("message", {
                required: "Please share a brief note",
                maxLength: { value: 1000, message: "Max 1000 characters" },
              })}
              rows={4}
              className={inputCls(!!errors.message)}
              placeholder="What outcomes are you hoping to drive?"
            />
          </Field>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={closeForm}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-foreground/70 hover:text-foreground"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90 disabled:opacity-70"
            >
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {isSubmitting ? "Sending…" : "Submit Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const inputCls = (hasError: boolean) =>
  cn(
    "w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition placeholder:text-muted-foreground/70",
    "focus:outline-none focus:ring-2 focus:ring-primary/30",
    hasError ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"
  );

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-foreground/80">
      {label}
    </span>
    {children}
    {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
  </label>
);
