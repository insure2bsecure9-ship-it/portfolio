import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Satish guided us through the entire process with patience and transparency. When we needed to file a claim, he was there every step of the way.",
    name: "Ramesh K.",
    role: "Family Health Plan",
  },
  {
    quote: "I was confused about which health plan to choose. Satish took the time to explain every detail without any pressure. Truly a trustworthy advisor.",
    name: "Priya S.",
    role: "Star Health Super Star",
  },
  {
    quote: "The claim process was seamless thanks to Satish's coordination with the insurance company. I couldn't have managed it without his support.",
    name: "Venkat R.",
    role: "Care Supreme Plan",
  },
  {
    quote: "Professional, approachable, and always available. Satish helped us secure both health and life insurance for our entire family.",
    name: "Lakshmi M.",
    role: "Tata AIA Life + Health",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real families who trust SJ Health Solutions with their insurance needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm relative"
            >
              <Quote size={32} className="text-accent/20 absolute top-4 right-4" />
              <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
