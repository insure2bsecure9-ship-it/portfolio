import { motion } from "framer-motion";
import { Building, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    organization: "Star Health Insurance",
    role: "Authorized Insurance Advisor",
    period: "2021 — Present",
    location: "Hyderabad, India",
    highlights: ["Super Star & Assure product specialist", "Cashless network coordination", "Family health policy expert"],
  },
  {
    organization: "Care Health Insurance",
    role: "Insurance Advisor",
    period: "2022 — Present",
    location: "Hyderabad, India",
    highlights: ["Care Supreme plan specialist", "Pre-existing disease coverage", "Senior citizen health plans"],
  },
  {
    organization: "Tata AIG Insurance",
    role: "Multi-Line Insurance Advisor",
    period: "2022 — Present",
    location: "Hyderabad, India",
    highlights: ["Health, Vehicle & Travel insurance", "Corporate group policies", "International travel coverage"],
  },
  {
    organization: "Tata AIA Life Insurance",
    role: "Life Insurance Advisor",
    period: "2023 — Present",
    location: "Hyderabad, India",
    highlights: ["Term life protection plans", "Investment-linked policies", "Retirement planning solutions"],
  },
];

const ExperienceCards = () => {
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
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Organizations & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Satish Kumar Erra has worked with India's most reputed insurance providers, building deep expertise across health, life, and general insurance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Building size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-foreground text-lg">{exp.organization}</h3>
                  <p className="text-accent font-medium text-sm">{exp.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCards;
