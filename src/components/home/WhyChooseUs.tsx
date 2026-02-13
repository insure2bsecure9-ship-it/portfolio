import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Proven Expertise",
    description: "Over 4+ years of specialized experience in health & life insurance, serving 500+ satisfied families.",
  },
  {
    title: "Comprehensive Support",
    description: "From selecting the right plan to seamless claim assistance, we are with you at every step.",
  },
  {
    title: "Personalized Solutions",
    description: "Tailored insurance strategies that align perfectly with your family's unique health and financial needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full shadow-2xl shadow-emerald-500/10 flex items-center justify-center p-8 animate-float">
              <img
                src="/logo.png"
                alt="SJ Health Solutions Logo"
                className="w-full h-auto object-contain"
              />
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/20 animate-spin-slow" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-8">
              Why We Are The Best?
            </h2>

            <div className="space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
