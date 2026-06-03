export const CLINIC = {
  name: "Confidental Clinic",
  doctor: "Dr. Saloni Verma",
  tagline: "Painless, gentle dental care — loved by kids & families",
  phoneDisplay: "086995 46959",
  phoneTel: "+918699546959",
  whatsapp: "918699546959",
  rating: "4.9",
  reviews: "102",
  address:
    "33 Feet Rd, opp. USPC Jain School, Urban Estate, Guru Teg Bahadur Nagar, Ludhiana, Punjab 141008",
  mapsQuery:
    "Confidental+Clinic+33+Feet+Rd+Urban+Estate+Guru+Teg+Bahadur+Nagar+Ludhiana",
};

export const TIMINGS = [
  { day: "Monday", time: "9:30 AM – 7:30 PM" },
  { day: "Tuesday", time: "9:30 AM – 7:30 PM" },
  { day: "Wednesday", time: "9:30 AM – 7:30 PM" },
  { day: "Thursday", time: "9:30 AM – 7:30 PM" },
  { day: "Friday", time: "9:30 AM – 7:30 PM" },
  { day: "Saturday", time: "9:30 AM – 7:30 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

// Business hours in minutes-from-midnight, keyed by JS getDay() (0 = Sunday)
export const BUSINESS_HOURS: Record<number, { open: number; close: number }> = {
  0: { open: 10 * 60, close: 14 * 60 }, // Sunday 10:00 AM – 2:00 PM
  1: { open: 9 * 60 + 30, close: 19 * 60 + 30 }, // Mon
  2: { open: 9 * 60 + 30, close: 19 * 60 + 30 },
  3: { open: 9 * 60 + 30, close: 19 * 60 + 30 },
  4: { open: 9 * 60 + 30, close: 19 * 60 + 30 },
  5: { open: 9 * 60 + 30, close: 19 * 60 + 30 },
  6: { open: 9 * 60 + 30, close: 19 * 60 + 30 }, // Saturday
};

const DAY_LABELS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function fmt(mins: number) {
  let h = Math.floor(mins / 60);
  const m = mins % 60;
  const period = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${m.toString().padStart(2, "0")} ${period}`;
}

/** Returns an error string if the time is outside business hours, else null. */
export function validateBusinessTime(
  day: number,
  minutes: number
): string | null {
  const hours = BUSINESS_HOURS[day];
  if (!hours) return "We are closed on this day.";
  if (minutes < hours.open || minutes > hours.close) {
    return `On ${DAY_LABELS[day]} we are open ${fmt(hours.open)} – ${fmt(
      hours.close
    )}. Please pick a time within these hours.`;
  }
  return null;
}

export const SERVICES = [
  {
    icon: "🧒",
    title: "Child Dentistry",
    desc: "Specialised, friendly care for little ones — caps, fillings, fluoride and habit-breaking, all done with a smile.",
  },
  {
    icon: "🦷",
    title: "Root Canal Treatment",
    desc: "Advanced, painless single-sitting root canals that save your natural tooth and end the ache for good.",
  },
  {
    icon: "✨",
    title: "Teeth Cleaning & Polishing",
    desc: "Professional scaling and polishing for fresh breath, healthy gums and a brighter, cleaner smile.",
  },
  {
    icon: "😁",
    title: "Crowns & Bridges",
    desc: "Natural-looking crowns, bridges and full-mouth rehabilitation to restore confident chewing and smiling.",
  },
  {
    icon: "🪥",
    title: "Cosmetic Dentistry",
    desc: "Smile makeovers, whitening and gum treatments tailored to give you the smile you have always wanted.",
  },
  {
    icon: "🩺",
    title: "Routine Check-ups",
    desc: "Regular exams and preventive guidance so problems are caught early and treatment stays simple.",
  },
];

export const REVIEWS = [
  {
    name: "Anonymous",
    text: "Excellent experience! My daughter was nervous but the treatment was completely painless. Doctor was kind and patient.",
  },
  {
    name: "Sakshi Pathania",
    text: "Wonderful experience. My child felt comfortable and happy after each treatment. Highly satisfactory.",
  },
  {
    name: "Harry (Local Guide)",
    text: "Excellent experience with Dr. Saloni. Good behaviour and great knowledge of dental treatment.",
  },
];

export const HIGHLIGHTS = [
  {
    icon: "🧸",
    title: "Great with little ones",
    desc: "Kids feel calm and happy — we make every visit fun and fear-free.",
  },
  {
    icon: "🌿",
    title: "Painless & gentle",
    desc: "Modern techniques mean comfortable, gentle procedures every time.",
  },
  {
    icon: "💬",
    title: "Every step explained",
    desc: "The doctor explains each step in detail so you always feel in control.",
  },
];
