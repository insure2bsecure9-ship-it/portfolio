import { Link } from "react-router-dom";
import { ArrowRight, Shield, HeartPulse, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
    { icon: Shield, title: "About Us", desc: "Learn about our mission and values", href: "/about" },
    { icon: HeartPulse, title: "Insurance Plans", desc: "Explore our partner categories", href: "/categories" },
    { icon: TrendingUp, title: "Our Success", desc: "See our track record and analytics", href: "/success" },
    { icon: Users, title: "Contact Us", desc: "Get personalized expert advice", href: "/contact" },
];

const QuickNavigation = () => {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Explore</p>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                        How Can We Help You?
                    </h2>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {quickLinks.map((item, i) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                to={item.href}
                                className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-light/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                    <item.icon size={24} className="text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground text-lg mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                                    <span className="text-accent text-xs font-bold uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                                        View Details <ArrowRight size={12} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickNavigation;
