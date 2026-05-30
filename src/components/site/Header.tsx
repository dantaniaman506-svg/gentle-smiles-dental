import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarHeart } from "lucide-react";
import logo from "@/assets/logo.png";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Confidental Clinic logo"
            width={96}
            height={96}
            className="h-16 w-auto rounded-xl object-contain sm:h-20 lg:h-24"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#appointment"
            className="hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105 sm:inline-flex"
          >
            <CalendarHeart className="h-4 w-4" />
            Book Appointment
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-base font-bold text-primary-foreground shadow-soft"
              >
                <CalendarHeart className="h-4 w-4" />
                Book Appointment
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
