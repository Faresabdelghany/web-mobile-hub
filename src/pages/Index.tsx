import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Excellence from "@/components/Excellence";
import Team from "@/components/Team";
import Programs from "@/components/Programs";
import MarketingSolution from "@/components/MarketingSolution";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <Excellence />
      <Team />
      <Programs />
      <MarketingSolution />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
