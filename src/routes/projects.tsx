import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, Cable, Zap, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Capabilities | Lasting Impressions Construction" },
      { name: "description", content: "Underground construction capabilities — HDD, conduit, and utility installation projects across Northeast Ohio." },
      { property: "og:title", content: "Projects & Capabilities — Lasting Impressions Construction" },
      { property: "og:description", content: "HDD, trenchless, and underground utility work across Northeast Ohio." },
    ],
  }),
  component: ProjectsPage,
});

const capabilities = [
  {
    icon: Wrench,
    tag: "Directional Drilling",
    title: "HDD Bores Under Roads & Driveways",
    desc: "Trenchless bores from a few feet to long-distance runs under asphalt, concrete, landscaping, and waterways — no surface disruption.",
  },
  {
    icon: Cable,
    tag: "Conduit",
    title: "Conduit Installation & Spot Fixes",
    desc: "New underground conduit pathways for fiber, telecom, and power — plus targeted repairs on damaged or failed existing conduit runs.",
  },
  {
    icon: Zap,
    tag: "Utilities",
    title: "Water, Gas & Electric Service Lines",
    desc: "Residential and commercial service line installs, vault sets, light pole power, and inspection-ready tie-ins.",
  },
];

const stats = [
  { value: "Northeast Ohio", label: "Service Area" },
  { value: "Owner-Operated", label: "Direct Accountability" },
  { value: "Residential & Commercial", label: "Project Types" },
  { value: "Licensed & Insured", label: "Peace of Mind" },
];

function ProjectsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-surface text-surface-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Projects & Capabilities</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
            Real equipment. Real work. Real results.
          </h1>
          <p className="mt-6 max-w-2xl text-surface-foreground/80 text-lg">
            A snapshot of the underground utility, HDD, and conduit work we deliver across
            Northeast Ohio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">What We Do On-Site</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-lg border border-border bg-card p-6 shadow-elevate">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{c.tag}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-card-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-muted/40 p-6">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <p className="mt-3 font-display text-xl font-bold text-foreground">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-border bg-card p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-card-foreground">
              Have a project in mind?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Tell us what you need installed, repaired, or bored — we'll walk the site and give you a straight answer.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground hover:opacity-90"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
