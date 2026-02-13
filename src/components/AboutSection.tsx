import { Heart, Eye, LifeBuoy, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Honest Advice",
    description: "Straightforward, unbiased recommendations tailored to your unique needs—never a hard sell.",
  },
  {
    icon: Eye,
    title: "Transparent Guidance",
    description: "Full clarity on policy terms, benefits, and exclusions so you make confident, informed decisions.",
  },
  {
    icon: LifeBuoy,
    title: "Claim-Time Support",
    description: "Dedicated assistance when it matters most—standing by you through every step of the claims process.",
  },
  {
    icon: Users,
    title: "Long-Term Relationships",
    description: "We don't chase sales. We build lasting partnerships rooted in trust, reliability, and genuine care.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
            Your Trusted Insurance Partner
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Satish Kumar Erra is a highly committed Insurance Advisor with over 4 years of
            specialized experience. Associated with reputed providers like Star Health, Tata AIA,
            Tata AIG, and Care Health, he is widely appreciated for his professional conduct,
            genuine dedication to client welfare, and deep understanding of policy terms and
            claim procedures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-light flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-sans font-semibold text-foreground text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
