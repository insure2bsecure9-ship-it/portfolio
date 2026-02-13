import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";
import advisorImg from "@/assets/satish-high.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/3 translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-1.5">
              <Shield size={14} className="text-accent" />
              <span className="text-xs font-semibold tracking-wide uppercase">Trusted Insurance Advisory</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight">
              Insure & <span className="text-accent">Be Secure</span>
            </h1>

            <p className="text-base sm:text-lg text-primary-foreground/75 max-w-md leading-relaxed">
              With over <strong className="text-primary-foreground">4+ years of specialized expertise</strong> in health
              insurance, Satish Kumar Erra provides personalized guidance to protect
              your family's health and financial future.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-emerald-dark font-semibold text-sm px-8 h-12 rounded-lg shadow-lg shadow-accent/25">
                  Get Expert Advice
                </Button>
              </Link>
              <Link to="/categories">
                <Button
                  size="lg"
                  className="bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20 font-semibold text-sm px-8 h-12 rounded-lg backdrop-blur-sm"
                >
                  Explore Plans
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
              {["Star Health", "Care Health", "Tata AIG", "Tata AIA"].map((partner) => (
                <div key={partner} className="flex items-center gap-1.5 text-sm text-primary-foreground/60">
                  <CheckCircle size={13} className="text-accent" />
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-[22rem] lg:h-[26rem] rounded-2xl overflow-hidden border-2 border-primary-foreground/10 shadow-2xl shadow-black/30">
                <img
                  src={advisorImg}
                  alt="Satish Kumar Erra - Insurance Advisor"
                  className="w-full h-full object-cover scale-[1.15] translate-y-4"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-accent text-accent-foreground rounded-xl px-5 py-3 shadow-lg shadow-accent/30">
                <p className="text-2xl font-bold font-display">4<sup className="text-sm">+</sup></p>
                <p className="text-[11px] font-semibold tracking-wide">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
