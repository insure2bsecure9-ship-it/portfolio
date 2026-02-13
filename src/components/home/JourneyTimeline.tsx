import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Handshake, TrendingUp, Star } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Began Insurance Advisory Career",
    description: "Started the professional journey in health insurance, driven by a passion to help families secure their future.",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "Partnered with Star Health Insurance",
    description: "Became an authorized advisor for Star Health, offering flagship products like Super Star and Assure plans.",
    icon: Handshake,
  },
  {
    year: "2022",
    title: "Expanded to Multi-Insurer Advisory",
    description: "Onboarded Care Health Insurance and Tata AIG, broadening the portfolio to include vehicle and travel insurance.",
    icon: TrendingUp,
  },
  {
    year: "2023",
    title: "Life Insurance & 300+ Families Served",
    description: "Partnered with Tata AIA Life Insurance for protection and life coverage. Crossed the milestone of serving 300+ families.",
    icon: Award,
  },
  {
    year: "2024",
    title: "SJ Health Solutions Established",
    description: "Founded the brand SJ Health Solutions, a trusted name in comprehensive insurance advisory services across the region.",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "500+ Families & Growing",
    description: "Continuing to scale with a 98% client satisfaction rate. Focused on group health insurance and corporate partnerships.",
    icon: Star,
  },
];

const JourneyTimeline = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Professional Journey</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            A Timeline of Trust & Growth
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a passionate beginner to a trusted advisor for 500+ families — every milestone reflects dedication, integrity, and service excellence.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          {milestones.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start mb-12 lg:mb-16 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot on line */}
                <div className="absolute left-6 lg:left-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background -translate-x-1.5 mt-6 z-10" />

                {/* Card */}
                <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] ${isLeft ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:text-left"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:justify-end" : ""}`}>
                      <div className="w-10 h-10 rounded-lg bg-emerald-light flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-accent" />
                      </div>
                      <span className="text-accent font-display font-bold text-xl">{item.year}</span>
                    </div>
                    <h3 className="font-sans font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
