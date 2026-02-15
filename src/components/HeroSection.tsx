import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Award, Users, MessageCircle } from "lucide-react";
import advisorImg from "@/assets/satish-high.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/3 translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          
          {/* Mobile: Image first, Desktop: Content first */}
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-1.5">
              <Shield size={14} className="text-accent" />
              <span className="text-xs font-semibold tracking-wide uppercase">Trusted Insurance Advisory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight">
              Insure & <span className="text-accent">Be Secure</span>
            </h1>

            <p className="text-base sm:text-lg text-primary-foreground/75 max-w-md leading-relaxed">
              With over <strong className="text-primary-foreground">4+ years of specialized expertise</strong> in health
              insurance, Satish Kumar Erra provides personalized guidance to protect
              your family's health and financial future.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-emerald-dark font-semibold text-sm px-8 h-12 rounded-lg shadow-lg shadow-accent/25 transition-all hover:scale-105">
                  Get Expert Advice
                </Button>
              </Link>
              <Link to="/categories">
                <Button
                  size="lg"
                  className="bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20 font-semibold text-sm px-8 h-12 rounded-lg backdrop-blur-sm transition-all hover:scale-105"
                >
                  Explore Plans
                </Button>
              </Link>
              <a 
                href="https://wa.me/919032412833" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-8 h-12 rounded-lg shadow-lg transition-all hover:scale-105 flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Let's Connect
                </Button>
              </a>
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

          {/* Image Section - Shows first on mobile, second on desktop */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end animate-scale-in">
            {/* Profile Image - Circle on mobile, rounded rectangle on desktop */}
            <div className="relative mb-6 lg:mb-0">
              {/* Mobile: Circular Image */}
              <div className="lg:hidden">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl shadow-black/40 ring-4 ring-primary-foreground/10">
                    <img
                      src={advisorImg}
                      alt="Satish Kumar Erra - Insurance Advisor"
                      className="w-full h-full object-cover scale-125 translate-y-6"
                    />
                  </div>
                  {/* Floating badge - horizontal rectangle */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground rounded-lg px-5 py-2 shadow-xl shadow-accent/40 border-4 border-primary">
                    <p className="text-center whitespace-nowrap">
                      <span className="text-xl font-bold font-display">4+ YEARS EXP</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop: Rounded Rectangle */}
              <div className="hidden lg:block">
                <div className="w-[22rem] h-[26rem] rounded-2xl overflow-hidden border-2 border-primary-foreground/10 shadow-2xl shadow-black/30">
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

            {/* Name and Title - Mobile only */}
            <div className="text-center lg:hidden space-y-3 mt-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground">
                  Satish Kumar Erra
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="h-px w-8 bg-accent"></div>
                  <p className="text-sm font-medium text-accent uppercase tracking-wider">
                    Licensed Insurance Advisor
                  </p>
                  <div className="h-px w-8 bg-accent"></div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center justify-center gap-6 pt-2">
                <div className="flex items-center gap-1.5">
                  <Users size={16} className="text-accent" />
                  <span className="text-xs text-primary-foreground/70 font-medium">120+ Clients</span>
                </div>
                <div className="h-4 w-px bg-primary-foreground/20"></div>
                <div className="flex items-center gap-1.5">
                  <Award size={16} className="text-accent" />
                  <span className="text-xs text-primary-foreground/70 font-medium">4.9★ Rating</span>
                </div>
              </div>

              {/* WhatsApp Contact Button */}
              <div className="pt-2">
                <a 
                  href="https://wa.me/919032412833" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105"
                >
                  <MessageCircle size={18} />
                  <span>Let's Connect</span>
                </a>
              </div>
            </div>

            {/* Trusted Badge - Mobile only */}
            <div className="lg:hidden mt-6 flex justify-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-1.5">
                <Shield size={14} className="text-accent" />
                <span className="text-xs font-semibold tracking-wide uppercase">Trusted Insurance Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;