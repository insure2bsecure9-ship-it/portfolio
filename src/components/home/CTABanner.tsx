import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-primary rounded-2xl p-10 lg:p-16 text-center"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/10" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent/5" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Secure Your Future?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Get personalized insurance advice from an experienced professional who puts your family first.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-emerald-dark font-semibold text-base px-10 gap-2"
              >
                Get Started Today <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
