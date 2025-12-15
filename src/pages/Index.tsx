import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import MarketingGoals from "@/components/home/MarketingGoals";
import CultureSection from "@/components/home/CultureSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";

import { SEO } from "@/components/SEO";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CLIMORA",
    "url": window.location.origin,
    "logo": window.location.origin + "/climora_logo.png",
    "sameAs": [
      "https://facebook.com/climora",
      "https://instagram.com/climora",
      "https://linkedin.com/company/climora"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+20-000-000-0000",
      "contactType": "customer service",
      "email": "info@climora.com"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="CLIMORA | Full Service Digital Marketing Agency"
        description="CLIMORA is a full service digital marketing agency specializing in strategy, design, and content. We help your brand move forward with data-driven marketing solutions."
        schema={schema}
      />
      <HeroSection />
      <StatsSection />
      <CultureSection />
      <PortfolioSection />
      <MarketingGoals />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
