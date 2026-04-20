import { Phone } from "lucide-react";

export function MobileCallBar() {
  return (
    <a
      href="tel:440-228-9190"
      className="fixed bottom-4 right-4 z-40 sm:hidden inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-glow"
      aria-label="Call now"
    >
      <Phone className="h-4 w-4" /> Call Now
    </a>
  );
}
