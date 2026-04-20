import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import heroImg from "@/assets/hero-drilling.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import fiberImg from "@/assets/service-fiber.jpg";
import utilityImg from "@/assets/service-utility.jpg";
import hddImg from "@/assets/service-hdd.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Work Gallery | Lasting Impressions Construction" },
      { name: "description", content: "See our underground construction work — HDD, fiber, and utility installation projects across Northeast Ohio." },
      { property: "og:title", content: "Project Gallery — Lasting Impressions Construction" },
      { property: "og:description", content: "HDD, trenchless, and underground utility work across Northeast Ohio." },
      { property: "og:image", content: p1 },
      { name: "twitter:image", content: p1 },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: p1, title: "Commercial HDD Bore", tag: "Directional Drilling", desc: "Multi-stem drilling site supporting a commercial utility extension." },
  { img: p2, title: "Residential Trenchless Install", tag: "HDD", desc: "Underground line installation under a suburban street with minimal disruption." },
  { img: p3, title: "Light Pole Power Conduit", tag: "Electrical", desc: "Underground conduit and service feeding new lighting infrastructure." },
  { img: fiberImg, title: "Fiber Optic Trench Pull", tag: "Fiber Optic", desc: "Conduit and fiber installation for a residential service expansion." },
  { img: utilityImg, title: "Water & Gas Service Lines", tag: "Utilities", desc: "Coordinated installation of water and gas lines on a new build." },
  { img: hddImg, title: "Bore Head Up-Close", tag: "Equipment", desc: "Precision HDD tooling — the right rig for the right ground." },
] as const;

function ProjectsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-surface text-surface-foreground py-20 md:py-28">
        <img src={heroImg} alt="" aria-hidden width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Project Gallery</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
            Real work. Real ground. Real results.
          </h1>
          <p className="mt-6 max-w-2xl text-surface-foreground/80 text-lg">
            A look at recent underground utility, HDD, and fiber installation projects across
            Northeast Ohio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <figure key={p.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-elevate">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    {p.tag}
                  </span>
                </div>
                <figcaption className="p-5">
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
