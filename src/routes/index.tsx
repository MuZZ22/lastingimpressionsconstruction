import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin, Wrench, Cable, Zap, CheckCircle2 } from "lucide-react";
import drillImg from "@/assets/equipment-drill.png";
import excavatorImg from "@/assets/equipment-excavator.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lasting Impressions Construction | HDD & Underground Utility Ohio" },
      { name: "description", content: "Trusted horizontal directional drilling, fiber optic, and underground utility contractor serving Perry & Northeast Ohio. Get a free quote today." },
      { property: "og:title", content: "Precision Underground Solutions You Can Trust — Lasting Impressions" },
      { property: "og:description", content: "HDD, fiber optic, and utility installation across Northeast Ohio." },
      { property: "og:image", content: drillImg },
      { name: "twitter:image", content: drillImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-surface text-surface-foreground">
        <img
          src={drillImg}
          alt="Ditch Witch JT20 horizontal directional drilling rig"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-24 md:py-36">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Serving Northeast Ohio
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05]">
            Precision Underground <span className="text-accent">Solutions</span> You Can Trust
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-surface-foreground/80">
            Horizontal directional drilling, fiber optic, and underground utility installation —
            delivered with minimal surface disruption and maximum reliability.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-bold text-accent-foreground shadow-glow hover:opacity-90 transition"
            >
              Request a Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:440-228-9190"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-4 font-bold text-surface-foreground hover:bg-white/10 transition"
            >
              <Phone className="h-5 w-5" /> Call 440-228-9190
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: Clock, label: "On-Time Delivery" },
              { icon: MapPin, label: "Local NE Ohio" },
              { icon: Wrench, label: "Skilled Operator" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">What We Do</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">
              Specialized Underground Construction
            </h2>
            <p className="mt-4 text-muted-foreground">
              From residential service lines to large-scale contractor subcontracting, we deliver
              trenchless solutions that protect your property and your timeline.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Wrench, title: "Horizontal Directional Drilling", desc: "Trenchless boring under roads, driveways, and landscapes — minimal disruption, maximum precision." },
              { icon: Cable, title: "Fiber Optic Installation", desc: "Reliable underground fiber installation for residential, commercial, and contractor partnerships." },
              { icon: Zap, title: "Underground Utilities", desc: "Water, gas, electrical, and light pole power lines installed safely and to spec." },
            ].map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-elevate p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-accent hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Why Choose Us</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">
              Reliable. Efficient. Built to Last.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Owner-operated by Shaun Liddy, Lasting Impressions Construction is built on hard work,
              clean job sites, and projects done right the first time.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Trenchless advantage — minimal surface disruption",
                "Skilled, experienced HDD operator",
                "Residential, commercial & subcontractor work",
                "Local Perry, Ohio business — fast response times",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-elevate bg-card flex items-center justify-center p-6">
              <img
                src={excavatorImg}
                alt="Compact excavator used for underground utility installation"
                loading="lazy"
                width={1280}
                height={896}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-accent text-accent-foreground p-6 rounded-lg shadow-glow max-w-xs">
              <p className="font-display text-3xl font-bold">100%</p>
              <p className="text-sm font-semibold uppercase tracking-wider">Commitment to Quality</p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}

function CTAStrip() {
  return (
    <section className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Start Your Project Today</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
            Got a job below the surface? Let's talk.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="tel:440-228-9190" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-bold text-accent-foreground hover:opacity-90 transition">
            <Phone className="h-5 w-5" /> Call Now
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-4 font-bold text-surface-foreground hover:bg-white/5 transition">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
