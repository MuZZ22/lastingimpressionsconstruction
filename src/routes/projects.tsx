import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import drillImg from "@/assets/equipment-drill.png";
import excavatorImg from "@/assets/equipment-excavator.png";
import jobUtilityBox from "@/assets/job-utility-box.png";
import jobBorePit from "@/assets/job-bore-pit.png";
import jobHddOnsite from "@/assets/job-hdd-onsite.png";
import jobVaultInstall from "@/assets/job-vault-install.png";
import restore1 from "@/assets/restore-1.png";
import restore2 from "@/assets/restore-2.png";
import restore3 from "@/assets/restore-3.png";
import restore4 from "@/assets/restore-4.png";
import restore5 from "@/assets/restore-5.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Work Gallery | Lasting Impressions Construction" },
      { name: "description", content: "See our underground construction work — HDD, fiber, and utility installation projects across Northeast Ohio." },
      { property: "og:title", content: "Project Gallery — Lasting Impressions Construction" },
      { property: "og:description", content: "HDD, trenchless, and underground utility work across Northeast Ohio." },
      { property: "og:image", content: jobHddOnsite },
      { name: "twitter:image", content: jobHddOnsite },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  img: string;
  title: string;
  tag: string;
  desc: string;
  contain?: boolean;
};

const equipment: Project[] = [
  { img: drillImg, title: "Ditch Witch JT20 — HDD Rig", tag: "Directional Drilling", desc: "Our directional drill, ready for trenchless boring under roads, driveways, and landscapes.", contain: true },
  { img: excavatorImg, title: "Compact Excavator", tag: "Utilities", desc: "Versatile compact excavator used for utility installs, service lines, and site prep.", contain: true },
];

const jobs: Project[] = [
  { img: jobHddOnsite, title: "On-Site HDD Bore", tag: "Directional Drilling", desc: "Drill setup and bore in progress on a residential utility installation." },
  { img: jobBorePit, title: "Bore Pit & Rod Entry", tag: "HDD", desc: "Clean bore entry pit through asphalt — trenchless installation in action." },
  { img: jobVaultInstall, title: "Utility Vault Install", tag: "Utilities", desc: "Precast utility vault set in place and ready for backfill and final connections." },
  { img: jobUtilityBox, title: "Service Line Connection", tag: "Underground Utility", desc: "Underground service line tie-in prepped for inspection and restoration." },
];

const restoration: Project[] = [
  { img: restore1, title: "Bore Pit Backfill", tag: "Restoration", desc: "Excavated bore pit backfilled and graded — ready for surface restoration." },
  { img: restore2, title: "Lawn Restoration", tag: "Restoration", desc: "Trench path restored across a residential lawn after utility install." },
  { img: restore3, title: "Seed & Straw Coverage", tag: "Restoration", desc: "Disturbed ground reseeded and protected with straw to promote regrowth." },
  { img: restore4, title: "Service Box & Lawn Repair", tag: "Restoration", desc: "Utility access box set flush with grade — surrounding turf restored." },
  { img: restore5, title: "Clean Patch Restoration", tag: "Restoration", desc: "Compact, tidy restoration around a finished utility access point." },
];

function ProjectsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-surface text-surface-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Project Gallery</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
            Real equipment. Real work. Real results.
          </h1>
          <p className="mt-6 max-w-2xl text-surface-foreground/80 text-lg">
            A look at recent underground utility, HDD, and fiber installation projects across
            Northeast Ohio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Recent Job Site Work</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          <h2 className="mt-20 font-display text-2xl md:text-3xl font-bold text-foreground">Surface Restoration</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">We leave job sites clean — backfilled, graded, seeded, and ready to recover.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {restoration.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          <h2 className="mt-20 font-display text-2xl md:text-3xl font-bold text-foreground">Our Equipment</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {equipment.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <figure className="group overflow-hidden rounded-lg border border-border bg-card shadow-elevate">
      <div className={`relative aspect-[4/3] overflow-hidden ${p.contain ? "bg-card flex items-center justify-center p-6" : ""}`}>
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          width={1280}
          height={896}
          className={`h-full w-full ${p.contain ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
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
  );
}
