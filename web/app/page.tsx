import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import PrivacySection from "@/components/PrivacySection";
import Updates from "@/components/Updates";
import WebappSection from "@/components/WebappSection";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <Features />
      <Demo />
      <PrivacySection />
      <Updates />
      <WebappSection />
      <Comparison />
      <Faq />
      <Pricing />
      <Cta />
    </main>
  );
}
