import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Lasting Impressions Construction — Perry, Ohio" },
      { name: "description", content: "Contact Lasting Impressions Construction for underground utility, HDD, and fiber optic projects in Northeast Ohio. Call 440-228-9190." },
      { property: "og:title", content: "Contact Lasting Impressions Construction" },
      { property: "og:description", content: "Get a free quote — call 440-228-9190 or email Lastingimpressions11@gmail.com" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  details: z.string().trim().min(10, "Tell us a bit about your project").max(2000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      details: String(fd.get("details") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Quote request from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nEmail: ${parsed.data.email}\n\nProject Details:\n${parsed.data.details}`
    );
    window.location.href = `mailto:Lastingimpressions11@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-surface text-surface-foreground py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">Get In Touch</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
            Let's plan your underground project.
          </h1>
          <p className="mt-6 max-w-2xl text-surface-foreground/80 text-lg">
            Call, email, or send the form below. We'll get back to you fast with next steps.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* FORM */}
          <div className="rounded-lg border border-border bg-card p-6 md:p-10 shadow-elevate">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-card-foreground">Request a Free Quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your project. Required fields are marked.
            </p>

            {submitted && (
              <div className="mt-6 flex items-start gap-3 rounded-md border border-accent/40 bg-accent/10 p-4 text-sm">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <p className="text-foreground">Thanks! Your email client should have opened. We'll be in touch shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5" noValidate>
              <Field id="name" label="Name" error={errors.name}>
                <input id="name" name="name" maxLength={100} required className="form-input" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="phone" label="Phone" error={errors.phone}>
                  <input id="phone" name="phone" type="tel" maxLength={30} required className="form-input" />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input id="email" name="email" type="email" maxLength={255} required className="form-input" />
                </Field>
              </div>
              <Field id="details" label="Project Details" error={errors.details}>
                <textarea id="details" name="details" rows={5} maxLength={2000} required className="form-input resize-y" />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-bold text-accent-foreground hover:opacity-90 transition"
              >
                Send Request <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* CONTACT INFO + MAP */}
          <div className="space-y-6">
            <div className="rounded-lg bg-surface text-surface-foreground p-6 md:p-8 shadow-elevate">
              <h3 className="font-display text-xl font-bold">Reach Us Directly</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-surface-foreground/60">Phone</p>
                    <a href="tel:440-228-9190" className="text-lg font-bold hover:text-accent">440-228-9190</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground"><Mail className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-surface-foreground/60">Email</p>
                    <a href="mailto:Lastingimpressions11@gmail.com" className="font-bold hover:text-accent break-all">
                      Lastingimpressions11@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground"><MapPin className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-surface-foreground/60">Service Area</p>
                    <p className="font-bold">Perry, Ohio · Northeast Ohio</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-lg border border-border shadow-elevate">
              <iframe
                title="Perry, Ohio service area map"
                src="https://www.google.com/maps?q=Perry,+Ohio&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          color: var(--color-foreground);
          padding: 0.75rem 0.875rem;
          font-size: 0.95rem;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .form-input:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-accent) 25%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
