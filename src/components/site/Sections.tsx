import { Reveal } from "./Reveal";
import { HIGHLIGHTS, SERVICES, REVIEWS, TIMINGS, CLINIC } from "./data";
import { Star, MapPin, Phone, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";
import aboutImg from "@/assets/saloni-patient1.jpg";
import gal1 from "@/assets/saloni-family.jpg";
import gal2 from "@/assets/saloni-kid.jpg";
import gal3 from "@/assets/saloni-team.jpg";
import gal4 from "@/assets/saloni-girl.jpg";
import resFace from "@/assets/result-face.jpg";
import resTeeth from "@/assets/result-teeth.jpg";
import resDentures from "@/assets/result-dentures.jpg";

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Highlights() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.1}>
            <div className="h-full rounded-3xl border border-border bg-card p-7 text-center shadow-sm transition-shadow hover:shadow-soft">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-3xl">
                {h.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {h.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{h.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Our Services"
            title="Complete dental care under one roof"
            sub="From a child's first check-up to advanced root canals — gentle, modern treatment for the whole family."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-2xl shadow-soft">
                  {s.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const points = [
    "MDS Pedodontist — child & root canal specialist",
    "Painless, gentle techniques for nervous patients",
    "Calm, friendly environment loved by kids",
    "Every treatment step explained in detail",
  ];
  return (
    <section id="about" className="bg-accent/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-[2rem] shadow-soft ring-4 ring-background">
              <img
                src={aboutImg}
                alt="Dr. Saloni Verma with a happy patient"
                loading="lazy"
                width={840}
                height={1040}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-card px-6 py-3 text-center shadow-soft">
              <p className="flex items-center gap-1 text-lg font-extrabold text-foreground">
                <Star className="h-5 w-5 fill-primary text-primary" /> {CLINIC.rating}
              </p>
              <p className="text-xs font-semibold text-muted-foreground">
                {CLINIC.reviews} reviews
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Meet your dentist
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            {CLINIC.doctor}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A trusted child specialist and root canal expert in Ludhiana, Dr. Saloni is
            known for her warm, patient approach. Parents love how comfortable their
            little ones feel, and every patient leaves with a healthier, happier smile.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="font-medium text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href="#appointment"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
          >
            Book with Dr. Saloni
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Results() {
  const items = [
    { img: resTeeth, label: "Gum depigmentation & whitening" },
    { img: resDentures, label: "Full-mouth rehabilitation" },
    { img: resFace, label: "Complete smile makeover" },
  ];
  return (
    <section id="results" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Smile Transformations"
            title="Real results, real smiles"
            sub="A few before & after cases treated at Confidental Clinic by Dr. Saloni Verma."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={(i % 3) * 0.1}>
              <figure className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-soft">
                <div className="overflow-hidden">
                  <img
                    src={it.img}
                    alt={`Before and after: ${it.label}`}
                    loading="lazy"
                    width={840}
                    height={840}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-center font-semibold text-foreground">
                  {it.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const imgs = [
    { src: gal4, alt: "Dr. Saloni with a smiling child" },
    { src: gal1, alt: "Happy family after treatment" },
    { src: gal2, alt: "Young patient with Dr. Saloni" },
    { src: gal3, alt: "Confidental Clinic team with a patient" },
  ];
  return (
    <section className="bg-accent/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Happy Patients"
            title="Smiles from our clinic"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {imgs.map((im, i) => (
            <Reveal key={im.alt} delay={(i % 4) * 0.08}>
              <div className="overflow-hidden rounded-3xl shadow-sm ring-2 ring-background transition-shadow hover:shadow-soft">
                <img
                  src={im.src}
                  alt={im.alt}
                  loading="lazy"
                  width={620}
                  height={780}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            eyebrow="Patient Reviews"
            title="Loved by families across Ludhiana"
          />
        </Reveal>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Child dentist", "Polite doctor", "Painless", "Great with kids"].map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-foreground/90">"{r.text}"</p>
                <p className="mt-5 font-bold text-foreground">{r.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-accent/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead eyebrow="Visit Us" title="Find Confidental Clinic" />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm">
                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-bold text-foreground">Address</p>
                  <p className="text-muted-foreground">{CLINIC.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm">
                <Phone className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-bold text-foreground">Phone</p>
                  <a
                    href={`tel:${CLINIC.phoneTel}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm">
                <Clock className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div className="w-full">
                  <p className="font-bold text-foreground">Timings</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {TIMINGS.map((t) => (
                      <li
                        key={t.day}
                        className="flex justify-between gap-4 text-muted-foreground"
                      >
                        <span>{t.day}</span>
                        <span className="font-medium text-foreground">{t.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 font-bold text-secondary-foreground shadow-blue transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="Confidental Clinic location"
                src={`https://www.google.com/maps?q=${CLINIC.mapsQuery}&output=embed`}
                className="h-full min-h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Confidental Clinic logo"
            width={72}
            height={72}
            className="h-16 w-16 rounded-2xl object-contain"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Gentle, painless dental care for kids and families in Ludhiana. Child
            dentistry & root canal specialists.
          </p>
        </div>
        <div>
          <p className="font-display font-bold text-foreground">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {[
              ["Services", "#services"],
              ["About", "#about"],
              ["Results", "#results"],
              ["Reviews", "#reviews"],
              ["Book Appointment", "#appointment"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display font-bold text-foreground">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{CLINIC.address}</li>
            <li>
              <a href={`tel:${CLINIC.phoneTel}`} className="hover:text-primary">
                {CLINIC.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-border px-4 pt-6 text-center text-sm text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Confidental Clinic · {CLINIC.doctor}. All rights
        reserved.
      </div>
    </footer>
  );
}
