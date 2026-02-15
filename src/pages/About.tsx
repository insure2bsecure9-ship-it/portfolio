import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Eye, LifeBuoy, Users, CheckCircle, Award, Briefcase } from "lucide-react";
import advisorImg from "@/assets/satish-high.png";

const values = [
  { icon: Heart, title: "Honest Advice", description: "Straightforward, unbiased recommendations tailored to your unique needs—never a hard sell." },
  { icon: Eye, title: "Transparent Guidance", description: "Full clarity on policy terms, benefits, and exclusions so you make confident, informed decisions." },
  { icon: LifeBuoy, title: "Claim-Time Support", description: "Dedicated assistance when it matters most—standing by you through every step of the claims process." },
  { icon: Users, title: "Long-Term Relationships", description: "We don't chase sales. We build lasting partnerships rooted in trust, reliability, and genuine care." },
];

const timeline = [
  { year: "2020", title: "Journey Begins", desc: "Started as a health insurance advisor with a mission to educate and protect families." },
  { year: "2021", title: "Partner Expansion", desc: "Onboarded Star Health and Care Health Insurance as key partners." },
  { year: "2022", title: "Growing Trust", desc: "Crossed 200+ families served with a focus on transparent guidance." },
  { year: "2023", title: "Multi-Line Coverage", desc: "Partnered with Tata AIG and Tata AIA to offer vehicle, travel, and life insurance." },
  { year: "2024", title: "500+ Families", desc: "Milestone achievement — 500+ families protected with 98% satisfaction rate." },
];

const milestones = [
  { icon: Briefcase, label: "4+ Years Experience" },
  { icon: Users, label: "500+ Families Served" },
  { icon: Award, label: "4 Premium Partners" },
  { icon: CheckCircle, label: "98% Satisfaction" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
                <h1 className="text-4xl sm:text-5xl font-display font-extrabold leading-tight mb-6">
                  Your Trusted<br />
                  <span className="text-accent">Insurance Partner</span>
                </h1>
                <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
                  Satish Kumar Erra is a highly committed Insurance Advisor with over 4 years of
                  specialized experience in Health Insurance. Since entering the field, he has been
                  consistently dedicated to helping individuals and families choose the right protection.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end animate-scale-in">
                <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border-4 border-primary-foreground/10 shadow-2xl">
                  <img src={advisorImg} alt="Satish Kumar Erra" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone counters */}
        <section className="py-12 bg-emerald-light">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, i) => (
                <div
                  key={m.label}
                  className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <m.icon size={20} className="text-accent" />
                  </div>
                  <span className="font-semibold text-foreground text-sm">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <div className="bg-muted rounded-2xl p-8 lg:p-12 shadow-sm animate-fade-in">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Who We Are</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Associated with reputed insurance providers such as <strong className="text-foreground">Star Health Insurance,
                    Tata AIA Life Insurance, Tata AIG Insurance,</strong> and <strong className="text-foreground">Care Health Insurance</strong>,
                    Satish Kumar Erra is widely appreciated for his honest and transparent advice.
                  </p>
                  <p>
                    He believes in educating clients clearly so they can make confident and informed decisions.
                    He provides dedicated support during claim time, standing by clients when they need
                    assistance the most.
                  </p>
                  <p>
                    Rather than focusing on one-time sales, Satish emphasizes building long-term relationships
                    based on trust, reliability, and service excellence. With a strong understanding of insurer
                    processes, policy terms, and claim procedures, he ensures smooth coordination between
                    customers and insurance companies.
                  </p>
                  <p className="font-semibold text-foreground italic border-l-4 border-accent pl-4">
                    "Insure & Be Secure" is not just a slogan — it is a commitment delivered through integrity,
                    responsibility, and personalized care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">What We Stand For</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-light flex items-center justify-center mx-auto mb-4">
                    <v.icon size={28} className="text-accent" />
                  </div>
                  <h3 className="font-sans font-semibold text-foreground text-lg mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Milestones & Growth</h2>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className="flex gap-6 animate-fade-in"
                    style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                      {item.year.slice(2)}
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex-1 hover:shadow-md transition-shadow">
                      <h3 className="font-sans font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
