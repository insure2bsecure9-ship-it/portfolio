import { motion } from "framer-motion";
import { MessageSquare, Search, FileText, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Free Consultation",
    description: "Share your requirements and family details. We listen carefully to understand your unique needs.",
  },
  {
    icon: Search,
    step: "02",
    title: "Plan Comparison",
    description: "We compare policies across all our partner insurers to find the best coverage at the right price.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Easy Enrollment",
    description: "Hassle-free paperwork and digital onboarding. We handle the documentation so you don't have to.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Lifetime Support",
    description: "From renewals to claims, we're your dedicated point of contact for the entire policy lifecycle.",
  },
];

const InsuranceProcess = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Your Journey to Security
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-primary-foreground/15" />
              )}

              <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-4 relative">
                <s.icon size={28} className="text-accent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceProcess;
