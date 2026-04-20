import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Start Your Project Today</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
            Ready to break ground — without breaking the surface?
          </h2>
          <p className="mt-4 text-surface-foreground/70 max-w-2xl">
            Get a fast, no-obligation quote from a trusted Northeast Ohio underground specialist.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:440-228-9190"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-bold text-accent-foreground hover:opacity-90 transition"
          >
            <Phone className="h-5 w-5" /> 440-228-9190
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-4 font-bold text-surface-foreground hover:bg-white/5 transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
