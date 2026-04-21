import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Cable, Zap, Droplet, Flame, Lightbulb, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | HDD, Conduit & Utility Installation Ohio" },
      { name: "description", content: "Horizontal directional drilling, conduit installation, water, gas, and electrical line installation across Northeast Ohio." },
      { property: "og:title", content: "Underground Construction Services — Lasting Impressions" },
      { property: "og:description", content: "Specialized HDD, conduit, and utility installation services in NE Ohio." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "hdd",
    icon: Wrench,
    title: "Horizontal Directional Drilling (HDD)",
    desc: "Trenchless installation of pipes, conduits, and cables under roads, driveways, sidewalks, landscaping, and waterways. Less disruption. Less restoration cost. More precision.",
    bullets: [
      "Bores under existing surfaces with no open trench",
      "Ideal for roads, driveways, lawns, and sensitive areas",
      "Faster project completion than traditional trenching",
      "Lower restoration cost — your property stays intact",
    ],
  },
  {
    id: "fiber",
    icon: Cable,
    title: "Conduit Installation & Repair",
    desc: "Underground conduit installation for fiber, telecom, and power applications. We install new conduit pathways and perform spot fixes on existing conduit runs to keep projects moving.",
    bullets: [
      "New conduit installation for residential and commercial sites",
      "Subcontracting for ISPs and prime contractors",
      "Spot fixes & repairs on damaged or failed existing conduit",
      "Proofing, locating, and inspection-ready installs",
    ],
  },
  {
    id: "utilities",
    icon: Zap,
    title: "Underground Utility Installation",
    desc: "Water, gas, electrical — installed safely and to code. From single residential service lines to commercial site work and light pole power, we handle the underground side.",
    bullets: [
      "Water service lines",
      "Natural gas line installation",
      "Electrical & light pole power conduits",
      "Residential, commercial & contractor support",
    ],
  },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="bg-surface text-surface-foreground py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Our Services</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-4xl">
            Expert Underground Solutions, Built With Precision.
          </h1>
          <p className="mt-6 max-w-2xl text-surface-foreground/80 text-lg">
            Specializing in horizontal directional drilling, conduit, and utility installation —
            your trusted partner for dependable underground work in Northeast Ohio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-16">
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="rounded-lg border border-border bg-card p-8 md:p-10 shadow-elevate"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground shrink-0">
                  <s.icon className="h-6 w-6" />
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-card-foreground">{s.title}</h2>
              </div>
              <p className="mt-5 text-muted-foreground max-w-3xl">{s.desc}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                    <span className="text-card-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Utility Lines We Install</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { icon: Droplet, label: "Water Lines" },
              { icon: Flame, label: "Gas Lines" },
              { icon: Zap, label: "Electrical" },
              { icon: Lightbulb, label: "Light Pole Power" },
            ].map((u) => (
              <div key={u.label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent">
                  <u.icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-card-foreground">{u.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
