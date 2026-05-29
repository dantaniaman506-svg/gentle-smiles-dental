import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Highlights,
  Services,
  About,
  Results,
  Gallery,
  Reviews,
  Contact,
  Footer,
} from "@/components/site/Sections";
import { Appointment } from "@/components/site/Appointment";
import { FloatingActions } from "@/components/site/FloatingActions";

const TITLE = "Confidental Clinic — Child & Root Canal Dentist in Ludhiana";
const DESC =
  "Painless, gentle dental care for kids & families by Dr. Saloni Verma. Child dentistry, root canal & smile makeovers in Ludhiana. Book your appointment today.";

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Confidental Clinic",
  description: DESC,
  address: {
    "@type": "PostalAddress",
    streetAddress: "33 Feet Rd, opp. USPC Jain School, Urban Estate, Guru Teg Bahadur Nagar",
    addressLocality: "Ludhiana",
    addressRegion: "Punjab",
    postalCode: "141008",
    addressCountry: "IN",
  },
  telephone: "+918699546959",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "102",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSONLD),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <About />
        <Results />
        <Gallery />
        <Reviews />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
