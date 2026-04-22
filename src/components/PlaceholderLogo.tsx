/** Simple text-based placeholder logo block — used in lieu of real brand assets. */
type Props = { name: string; className?: string };

export const PlaceholderLogo = ({ name, className = "" }: Props) => (
  <div
    className={`flex items-center justify-center rounded-md border border-divider bg-white px-6 py-4 text-base font-bold uppercase tracking-wider text-muted-foreground grayscale transition hover:grayscale-0 hover:text-foreground ${className}`}
    aria-label={`${name} logo`}
  >
    {name}
  </div>
);
