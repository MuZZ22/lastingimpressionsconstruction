import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Cable, Zap, Droplet, Flame, Lightbulb, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import hddImg from "@/assets/service-hdd.jpg";
import fiberImg from "@/assets/service-fiber.jpg";
import utilityImg from "@/assets/service-utility.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | HDD, Fiber Optic & Utility Installation Ohio" },
      { name: "description", content: "Horizontal directional drilling, fiber optic installation, water, gas, and electrical line installation across Northeast Ohio." },
      { property: "og:title", content: "Underground Construction Services — Lasting Impressions" },
      { property: "og:description", content: "Specialized HDD, fiber, and utility installation services in NE Ohio." },
      { property: "og:image", content: hddImg },
      { name: "twitter:image", content: hddImg },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "hdd",
    icon: Wrench,
    img: hddImg,
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
    img: fiberImg,
    title: "Fiber Optic Installation",
    desc: "Reliable underground fiber installation for ISPs, contractors, and direct clients. From residential service drops to large commercial runs, we install conduit and cable to spec.",
    bullets: [
      "Residential and commercial fiber drops",
      "Subcontracting for ISPs and prime contractors",
      "Conduit installation, locating, and pulls",
      "Clean, documented, and inspection-ready",
    ],
  },
  {
    id: "utilities",
    icon: Zap,
    img: utilityImg,
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
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
            Underground construction, done with precision.
          </h1>
          <p className="mt-6 max-w-2xl text-surface-foreground/80 text-lg">
            From horizontal directional drilling to fiber optic and utility installation —
            we're your one-call underground partner in Northeast Ohio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-20 md:space-y-28">
          {services.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-elevate">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
