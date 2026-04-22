import { Reveal } from "./Reveal";
import { PlaceholderLogo } from "./PlaceholderLogo";

const CLIENTS = ["Reliance", "HCL", "IBM", "CRIF", "ADP", "Bayer"];

export const Clients = () => (
  <section id="clients" className="section-pad bg-gradient-to-b from-background to-primary-soft/30">
    <div className="container-tight">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Our Proven <span className="text-primary">Partnerships</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Successful Collaborations With the{" "}
          <span className="font-semibold text-primary">Industry's Best</span>
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {CLIENTS.map((c) => (
            <li key={c}>
              <PlaceholderLogo name={c} />
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);
