import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ServicesSection />
      <MarqueeSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
