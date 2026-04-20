import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, HardHat, Award, Users } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import drillImg from "@/assets/equipment-drill.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shaun Liddy | Lasting Impressions Construction Ohio" },
      { name: "description", content: "Meet Shaun Liddy and learn the story of Lasting Impressions Construction — a trusted underground utility contractor based in Perry, Ohio." },
      { property: "og:title", content: "About Lasting Impressions Construction" },
      { property: "og:description", content: "Owner-operated HDD and underground utility specialist serving Northeast Ohio." },
      { property: "og:image", content: drillImg },
      { name: "twitter:image", content: drillImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-surface text-surface-foreground py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">About Us</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
            Built on grit, precision, and a promise to do it right.
          </h1>
          <p className="mt-6 max-w-2xl text-surface-foreground/80 text-lg">
            Lasting Impressions Construction is an owner-operated underground utility contractor
            proudly serving Northeast Ohio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div>
            <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Meet the Owner</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground max-w-3xl">
              Shaun Liddy — Operator. Owner. Northeast Ohioan.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-3xl">
              With years of hands-on experience in horizontal directional drilling and underground
              utility installation, Shaun founded Lasting Impressions Construction to bring honest,
              high-quality work to homeowners and contractors alike.
            </p>
            <p className="mt-4 text-muted-foreground max-w-3xl">
              Whether you need a single residential water line or a large-scale fiber subcontracting
              partner, you'll work directly with the operator on your job site — no middlemen,
              no excuses.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-3xl">
              {[
                "Specialized HDD and trenchless installation experience",
                "Trusted by residential clients and large contractors",
                "Local, responsive, and accountable",
                "Committed to clean, safe, professional job sites",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-6 md:grid-cols-3">
          {[
            { icon: HardHat, title: "Hands-On Expertise", desc: "Owner-operated work means quality control on every project." },
            { icon: Award, title: "Reputation First", desc: "We protect our name by protecting your property and timeline." },
            { icon: Users, title: "Built on Relationships", desc: "Repeat residential and contractor clients across NE Ohio." },
          ].map((v) => (
            <div key={v.title} className="rounded-lg border border-border bg-card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-card-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
