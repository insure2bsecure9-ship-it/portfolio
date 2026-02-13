import { Star, HeartPulse, Plane, ShieldCheck, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const partners = [
  {
    icon: Star,
    name: "Star Health Insurance",
    products: ["Super Star Health Insurance", "Star Assure Insurance"],
    description: "Comprehensive health coverage with cashless hospitalization and wide network access.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: HeartPulse,
    name: "Care Health Insurance",
    products: ["Care Supreme"],
    description: "Premium health protection with extensive benefits, high sum insured, and modern claim processes.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Plane,
    name: "Tata AIG Insurance",
    products: ["Health Insurance", "Vehicle Insurance", "Travel Insurance"],
    description: "Multi-line insurance solutions covering health, motor, and travel under one trusted brand.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: ShieldCheck,
    name: "Tata AIA Life Insurance",
    products: ["Protection Plans", "Life Coverage"],
    description: "Secure your family's financial future with robust life protection and wealth-building plans.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Partners</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
            Insurance Categories
          </h2>
          <p className="text-muted-foreground text-lg">
            We work with India's most reputed insurers to bring you the best protection plans.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {partners.map((p) => (
            <Card key={p.name} className="border border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${p.color} flex items-center justify-center mb-3`}>
                  <p.icon size={24} />
                </div>
                <CardTitle className="font-sans text-xl">{p.name}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.products.map((prod) => (
                    <span
                      key={prod}
                      className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Group Health */}
        <div className="mt-12 max-w-5xl mx-auto">
          <Card className="border border-accent/30 bg-emerald-light/50 shadow-sm">
            <CardHeader className="flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Users size={24} className="text-accent" />
              </div>
              <div>
                <CardTitle className="font-sans text-xl">Group Health Insurance</CardTitle>
                <CardDescription>
                  Customized group health plans for corporates, SMEs, and organizations — ensuring employee wellness
                  and retention with comprehensive coverage.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
