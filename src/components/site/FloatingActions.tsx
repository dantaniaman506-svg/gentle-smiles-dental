import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { CLINIC } from "./data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <motion.a
        href={`https://wa.me/${CLINIC.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-blue transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </motion.a>
      <motion.a
        href={`tel:${CLINIC.phoneTel}`}
        aria-label="Call clinic"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-soft transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
