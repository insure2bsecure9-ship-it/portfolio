import { motion } from "framer-motion";
import { Star, Heart, Shield, Umbrella } from "lucide-react";

const partners = [
  {
    name: "Star Health Insurance",
    icon: Star,
    products: ["Super Star Health", "Star Assure", "Family Health Optima"],
    color: "from-accent/10 to-accent/5",
    description: "India's leading standalone health insurer with cashless claim networks across 14,000+ hospitals.",
  },
  {
    name: "Care Health Insurance",
    icon: Heart,
    products: ["Care Supreme", "Care Advantage", "Care Freedom"],
    color: "from-accent/10 to-accent/5",
    description: "Known for comprehensive coverage, minimal exclusions, and hassle-free claim settlement.",
  },
  {
    name: "Tata AIG Insurance",
    icon: Shield,
    products: ["Health Insurance", "Vehicle Insurance", "Travel Insurance"],
    color: "from-accent/10 to-accent/5",
    description: "Multi-line insurer offering health, motor, and travel protection with global coverage options.",
  },
  {
    name: "Tata AIA Life Insurance",
    icon: Umbrella,
    products: ["Life Protection", "Term Plans", "Savings & Investment"],
    color: "from-accent/10 to-accent/5",
    description: "Premium life insurance solutions for long-term financial security and family protection.",
  },
];

const PartnersShowcase = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Trusted Partners</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Backed by India's Leading Insurers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work exclusively with top-rated insurance companies to bring you the best coverage options.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`bg-gradient-to-br ${partner.color} p-6 text-center`}>
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <partner.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-sans font-bold text-foreground">{partner.name}</h3>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{partner.description}</p>
                <div className="space-y-2">
                  {partner.products.map((product) => (
                    <div key={product} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground font-medium">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;
