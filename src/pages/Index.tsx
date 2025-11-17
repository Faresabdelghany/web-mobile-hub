import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import MarketingGoals from "@/components/home/MarketingGoals";
import CultureSection from "@/components/home/CultureSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
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
