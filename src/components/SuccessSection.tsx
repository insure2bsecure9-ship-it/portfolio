import { Award, Users, Building2, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "4+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Families Protected" },
  { icon: Building2, value: "4", label: "Insurance Partners" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
];

const SuccessSection = () => {
  return (
    <section id="success" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Track Record</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Built on Trust & Results
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Our commitment to integrity and client welfare is reflected in the trust placed in us by
            hundreds of families across the region.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <s.icon size={22} className="text-accent" />
              </div>
              <p className="text-3xl sm:text-4xl font-display font-bold">{s.value}</p>
              <p className="text-sm text-primary-foreground/60 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial placeholder */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <blockquote className="text-lg italic text-primary-foreground/80 leading-relaxed">
            "Satish guided us through the entire process with patience and transparency. When we
            needed to file a claim, he was there every step of the way. Truly a reliable advisor."
          </blockquote>
          <p className="mt-4 text-sm text-primary-foreground/50 font-medium">— A Satisfied Client</p>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
