import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneyTimeline from "@/components/home/JourneyTimeline";
import StatsCounter from "@/components/home/StatsCounter";
import PartnersShowcase from "@/components/home/PartnersShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ExperienceCards from "@/components/home/ExperienceCards";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InsuranceProcess from "@/components/home/InsuranceProcess";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/Footer";
import QuickNavigation from "@/components/home/QuickNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroSection />


        {/* 2. Why Choose Us */}
        <WhyChooseUs />

        {/* 3. Quick Navigation */}
        <QuickNavigation />


        {/* 4. Stats Counter */}
        <StatsCounter />

        {/* 5. How It Works / Process */}

        {/* 5. How It Works / Process */}
        <InsuranceProcess />

        {/* 6. Professional Journey Timeline */}
        <JourneyTimeline />

        {/* 7. Partners Showcase */}
        <PartnersShowcase />

        {/* 8. Experience & Organizations */}
        <ExperienceCards />

        {/* 9. Testimonials */}
        <TestimonialsSection />

        {/* 10. CTA Banner */}
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
