# Confidental Clinic — Website Plan

A beautiful, animated, single-page dental clinic website using your logo's colors (magenta-pink + sky blue). Appointment form ka data seedha WhatsApp message ban ke aapke number (086995 46959) pe khulega.

## Deployment note (important)
Yeh Lovable environment internally React + Vite par chalta hai. Site ko **pure client-side (static)** banaunga — koi server/database nahi. Kyunki WhatsApp form sirf `wa.me` link use karta hai, koi backend ki zaroorat nahi. Aisi static site **Vercel par seedhe deploy ho jati hai** (aur kisi bhi host par). Main koi server-only feature use nahi karunga jo deployment todey.

## Theme & Branding
- Colors logo se: magenta/pink (`#e6007e`-ish) primary, sky blue (`#29abe2`) secondary, white/soft backgrounds.
- Logo ko header aur footer mein decent size mein rakhunga. Logo mein naam pehle se hai, isliye text se naam dobara nahi likhunga.
- Friendly, clean, rounded look (child-friendly + professional). Smooth fade/slide/scale animations scroll par.

## Images
- Aapki uploaded images sahi jagah use karungi:
  - Dr. Saloni + bachche wali photos → Hero / About / "Happy Patients" gallery.
  - Before/After dental photos (teeth, dentures) → "Results / Smile Transformations" section.
- Jo extra cheezein chahiye (subtle background textures, tooth/icon graphics) wo main khud generate karke daalunga.

## Sections (single page, smooth scroll)
1. **Header / Nav** — logo + links (Home, Services, About, Results, Reviews, Contact) + "Book Appointment" button. Mobile par hamburger menu.
2. **Hero** — Dr. Saloni ke saath bachche wali warm photo, tagline (painless & gentle care), rating badge "4.9 ⭐ (102 reviews)", CTA buttons (Book Appointment + WhatsApp + Call).
3. **Trust highlights** — 3 cards: "Great with kids", "Painless & gentle", "Every step explained".
4. **Services** — Child Dentistry, Root Canal Treatment, + general dental cards with icons.
5. **About Dr. Saloni** — MDS Pedodontist, child & root canal specialist, photo, short bio.
6. **Results / Smile Transformations** — before/after gallery (teeth + dentures images) with subtle reveal animation.
7. **Happy Patients gallery** — clinic + patient photos in an animated grid.
8. **Reviews** — the 3 patient testimonials + popular tags (Child dentist, Polite doctor).
9. **Appointment booking form** — fields: Name, Phone, Service (dropdown), Preferred date/time, Message. On submit → builds a formatted WhatsApp message and opens `https://wa.me/918699546959?text=...` so patient ka appointment message seedha clinic ke WhatsApp pe chala jaye. Client-side validation with proper limits.
10. **Contact / Location** — address (33 Feet Rd, opp. USPC Jain School, Urban Estate, GTB Nagar, Ludhiana 141008), phone, WhatsApp, embedded Google Map, and timings table.
11. **Footer** — logo, quick links, contact, social.

## Timings to display
- Monday–Saturday: 9:30 AM – 7:30 PM
- Sunday: 10:00 AM – 2:00 PM

(Google par "7:30 AM next day" galat lag raha hai; main 7:30 PM dikhaungi — aap client se confirm ho jaye toh badal dunga.)

## Floating actions
- Sticky WhatsApp + Call floating buttons (mobile-friendly).

## Technical details
- Pure client-rendered React page (no server functions, no DB) → host-portable, Vercel-ready.
- Tailwind design tokens in `src/styles.css` updated to logo colors (oklch) for light theme.
- `framer-motion` for smooth scroll/entrance animations.
- Uploaded images copied into `src/assets/` and imported; AI-generated supporting graphics added where needed.
- SEO: proper title, meta description, single H1, alt text, JSON-LD `Dentist` schema with address/phone/rating, responsive viewport.
- WhatsApp number normalized to international format `91 86995 46959` for the `wa.me` link.

Ready ho toh "Implement plan" dabaiye aur main bana deta hoon.