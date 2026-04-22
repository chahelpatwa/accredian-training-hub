import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type LeadFormCtx = {
  open: boolean;
  openForm: () => void;
  closeForm: () => void;
};

const Ctx = createContext<LeadFormCtx | null>(null);

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const openForm = useCallback(() => setOpen(true), []);
  const closeForm = useCallback(() => setOpen(false), []);
  return <Ctx.Provider value={{ open, openForm, closeForm }}>{children}</Ctx.Provider>;
};

export const useLeadForm = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLeadForm must be inside LeadFormProvider");
  return v;
};

/** Smoothly scroll to a section by id and update the URL hash. */
export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
};
