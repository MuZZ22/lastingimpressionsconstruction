import { NavLink, Link } from "react-router-dom";
import { Phone, Menu, X, HardHat } from "lucide-react";
import { useState } from "react";

const PHONE = "440-228-9190";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3 text-surface-foreground">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <HardHat className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base md:text-lg font-bold tracking-wider">Lasting Impressions</span>
            <span className="block text-[10px] md:text-xs uppercase tracking-[0.25em] text-accent">Construction</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wider transition-colors hover:text-accent ${
                  isActive ? "text-accent" : "text-surface-foreground/80"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground hover:opacity-90 transition"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <button
            className="lg:hidden text-surface-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-surface">
          <div className="flex flex-col px-4 py-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm font-semibold uppercase tracking-wider ${
                    isActive ? "text-accent" : "text-surface-foreground/90"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold text-accent-foreground"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
