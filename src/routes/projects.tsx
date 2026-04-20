import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import drillImg from "@/assets/equipment-drill.png";
import excavatorImg from "@/assets/equipment-excavator.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Work Gallery | Lasting Impressions Construction" },
      { name: "description", content: "See our underground construction work — HDD, fiber, and utility installation projects across Northeast Ohio." },
      { property: "og:title", content: "Project Gallery — Lasting Impressions Construction" },
      { property: "og:description", content: "HDD, trenchless, and underground utility work across Northeast Ohio." },
      { property: "og:image", content: drillImg },
      { name: "twitter:image", content: drillImg },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: drillImg, title: "Ditch Witch JT20 — HDD Rig", tag: "Directional Drilling", desc: "Our directional drill, ready for trenchless boring under roads, driveways, and landscapes." },
  { img: excavatorImg, title: "Compact Excavator", tag: "Utilities", desc: "Versatile compact excavator used for utility installs, service lines, and site prep." },
] as const;

function ProjectsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-surface text-surface-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Our Equipment</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
            Real equipment. Real work. Real results.
          </h1>
          <p className="mt-6 max-w-2xl text-surface-foreground/80 text-lg">
            The right machines for underground utility, HDD, and fiber installation across
            Northeast Ohio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((p) => (
              <figure key={p.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-elevate">
                <div className="relative aspect-[4/3] overflow-hidden bg-card flex items-center justify-center p-6">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    {p.tag}
                  </span>
                </div>
                <figcaption className="p-5 border-t border-border">
                  <h3 className="font-display text-lg font-bold text-card-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
