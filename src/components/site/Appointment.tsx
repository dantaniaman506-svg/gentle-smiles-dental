import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { z } from "zod";
import { CLINIC, SERVICES } from "./data";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  service: z.string().min(1, "Please select a service").max(60),
  date: z.string().max(30).optional(),
  message: z.string().trim().max(500).optional(),
});

export function Appointment() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const v = parsed.data;
    const lines = [
      "*New Appointment Request — Confidental Clinic*",
      "",
      `👤 Name: ${v.name}`,
      `📞 Phone: ${v.phone}`,
      `🦷 Service: ${v.service}`,
      v.date ? `📅 Preferred: ${v.date}` : "",
      v.message ? `📝 Message: ${v.message}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section id="appointment" className="bg-accent/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Book Appointment
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Reserve your visit in seconds
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fill the form and we'll open WhatsApp with your details ready to send.
            Your appointment request goes straight to our clinic chat — quick,
            simple and confirmed personally.
          </p>
          <a
            href={`https://wa.me/${CLINIC.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-secondary px-5 py-3 font-bold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with us directly
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl bg-card p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold" htmlFor="name">
                  Full name
                </label>
                <input id="name" name="name" className={inputCls} placeholder="Your name" />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={inputCls}
                  placeholder="e.g. 98765 43210"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold" htmlFor="service">
                  Service
                </label>
                <select id="service" name="service" defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other / General consultation">
                    Other / General consultation
                  </option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-destructive">{errors.service}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold" htmlFor="date">
                  Preferred date & time
                </label>
                <input
                  id="date"
                  name="date"
                  className={inputCls}
                  placeholder="e.g. Mon 4 PM"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold" htmlFor="message">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={500}
                  className={inputCls}
                  placeholder="Tell us about your concern"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                <Send className="h-5 w-5" />
                Send via WhatsApp
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
