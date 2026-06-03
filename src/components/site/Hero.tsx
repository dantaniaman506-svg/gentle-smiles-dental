import { motion } from "framer-motion";
import { Star, Phone, MessageCircle, CalendarHeart } from "lucide-react";
import { CLINIC } from "./data";
import heroImg from "@/assets/saloni-girl.jpg";
import mascot from "@/assets/tooth-mascot.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground lg:mx-0"
          >
            <Star className="h-4 w-4 fill-current" />
            {CLINIC.rating} ★ · {CLINIC.reviews} Google reviews
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Healthy smiles for{" "}
            <span className="text-gradient-brand">kids & families</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground lg:mx-0"
          >
            {CLINIC.tagline}. Child dentistry & painless root canal treatment by{" "}
            <span className="font-semibold text-foreground">{CLINIC.doctor}</span> in
            Ludhiana.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              <CalendarHeart className="h-5 w-5" />
              Book Appointment
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-base font-bold text-secondary-foreground shadow-blue transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-background px-6 py-3 text-base font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-5 w-5" />
              Call now
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-4 ring-background">
            <img
              src={heroImg}
              alt="Dr. Saloni Verma with a happy young patient at Confidental Clinic"
              width={840}
              height={870}
              className="aspect-square w-full object-cover"
            />
          </div>

          <motion.img
            src={mascot}
            alt=""
            aria-hidden="true"
            width={150}
            height={150}
            className="absolute -bottom-8 -left-6 w-28 drop-shadow-xl sm:w-36"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute -right-3 top-6 rounded-2xl bg-background/90 px-4 py-3 shadow-soft backdrop-blur sm:-right-6">
            <p className="text-2xl font-extrabold text-gradient-brand">100%</p>
            <p className="text-xs font-semibold text-muted-foreground">
              Painless care
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
