import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DemoVideo from "@/components/DemoVideo";
import Benefits from "@/components/Benefits";
import Proof from "@/components/Proof";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ToolsCarousel from "@/components/ToolsCarousel";
import UseCases from "@/components/UseCases";
import AuditOffer from "@/components/AuditOffer";

export default function Home() {
  return (
    <main className="bg-ink">
      <Nav />
      <Hero />
      <ToolsCarousel />
      <UseCases />
      <HowItWorks />
      <DemoVideo />
      <Benefits />
      <AuditOffer />
      <Proof />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
