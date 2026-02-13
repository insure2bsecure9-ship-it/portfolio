import { motion } from "framer-motion";
import { Users, Shield, Clock, Award, Heart, Building2 } from "lucide-react";

const stats = [
  { icon: Clock, value: "4+", label: "Years of Expertise" },
  { icon: Users, value: "500+", label: "Families Protected" },
  { icon: Building2, value: "4", label: "Insurance Partners" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
  { icon: Heart, value: "1000+", label: "Policies Managed" },
  { icon: Shield, value: "95%", label: "Claim Success Rate" },
];

const StatsCounter = () => {
  return (
    <section className="py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">By The Numbers</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Results That Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring" }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-accent" />
              </div>
              <p className="text-3xl sm:text-4xl font-display font-bold">{stat.value}</p>
              <p className="text-sm text-primary-foreground/60 mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
