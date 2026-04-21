import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, HardHat } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <HardHat className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-lg font-bold tracking-wider">Lasting Impressions Construction</p>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Underground Specialists</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-surface-foreground/70">
            Precision horizontal directional drilling, fiber optic, and underground utility installation
            serving Northeast Ohio. Residential, commercial, and contractor partnerships.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold tracking-wider text-accent">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-surface-foreground/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold tracking-wider text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-surface-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <a href="tel:440-228-9190" className="hover:text-accent">440-228-9190</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-accent" />
              <a href="mailto:Lastingimpressions11@outlook.com" className="hover:text-accent break-all">
                Lastingimpressions11@outlook.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>Perry, Ohio · Serving NE Ohio</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between gap-2 text-xs text-surface-foreground/50">
          <p>© {new Date().getFullYear()} Lasting Impressions Construction. All rights reserved.</p>
          <p>Owner: Shaun Liddy · Perry, Ohio</p>
        </div>
      </div>
    </footer>
  );
}
