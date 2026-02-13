import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, HeartPulse, Plane, ShieldCheck, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const partners = [
  {
    id: "star",
    icon: Star,
    name: "Star Health Insurance",
    tagline: "India's Largest Standalone Health Insurer",
    products: [
      { name: "Super Star Health Insurance", features: ["Cashless treatment at 14,000+ hospitals", "No room rent capping", "Coverage up to ₹1 Crore", "Day care procedures covered"] },
      { name: "Star Assure Insurance", features: ["Affordable premium plans", "Pre & post hospitalization", "Annual health checkups", "Tax benefits under 80D"] },
    ],
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "care",
    icon: HeartPulse,
    name: "Care Health Insurance",
    tagline: "Comprehensive Coverage, Modern Claims",
    products: [
      { name: "Care Supreme", features: ["Unlimited sum insured restoration", "No claim bonus up to 500%", "Air ambulance coverage", "Domiciliary hospitalization"] },
    ],
    color: "bg-rose-50 text-rose-600",
    borderColor: "border-rose-200",
  },
  {
    id: "tataig",
    icon: Plane,
    name: "Tata AIG Insurance",
    tagline: "Multi-Line Protection Under One Brand",
    products: [
      { name: "Health Insurance", features: ["Comprehensive medical coverage", "Cashless network hospitals", "Critical illness riders", "Family floater plans"] },
      { name: "Vehicle Insurance", features: ["Comprehensive car/bike insurance", "Third-party liability cover", "Own damage protection", "Quick cashless claims"] },
      { name: "Travel Insurance", features: ["Trip cancellation cover", "Medical emergency abroad", "Baggage loss protection", "24/7 global assistance"] },
    ],
    color: "bg-amber-50 text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    id: "tataia",
    icon: ShieldCheck,
    name: "Tata AIA Life Insurance",
    tagline: "Secure Your Family's Financial Future",
    products: [
      { name: "Protection Plans", features: ["High sum assured at low premiums", "Income replacement benefits", "Critical illness cover", "Accidental death benefit"] },
      { name: "Life Coverage", features: ["Whole life protection", "Wealth creation options", "Maturity benefits", "Premium waiver riders"] },
    ],
    color: "bg-emerald-50 text-emerald-600",
    borderColor: "border-emerald-200",
  },
];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Partners</p>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-6">
              Insurance <span className="text-accent">Categories</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              We work with India's most reputed insurers to bring you the best protection plans.
              Explore each partner's offerings in detail below.
            </p>
          </div>
        </section>

        {/* Tabbed categories */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <Tabs defaultValue="star" className="w-full">
              <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-muted p-2 rounded-xl mb-8">
                {partners.map((p) => (
                  <TabsTrigger
                    key={p.id}
                    value={p.id}
                    className="flex-1 min-w-[140px] py-3 text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg"
                  >
                    <p.icon size={16} className="mr-2" />
                    {p.name.split(" ")[0]} {p.name.split(" ")[1]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {partners.map((p) => (
                <TabsContent key={p.id} value={p.id} className="animate-fade-in">
                  <div className={`border ${p.borderColor} rounded-2xl p-6 lg:p-8 bg-card shadow-sm`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl ${p.color} flex items-center justify-center`}>
                        <p.icon size={28} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold text-foreground">{p.name}</h2>
                        <p className="text-muted-foreground text-sm">{p.tagline}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {p.products.map((prod) => (
                        <Card key={prod.name} className="border border-border shadow-sm hover:shadow-md transition-shadow">
                          <CardHeader>
                            <CardTitle className="font-sans text-lg">{prod.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {prod.features.map((f) => (
                                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Group Health */}
        <section className="py-16 lg:py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="bg-emerald-light/50 border border-accent/20 rounded-2xl p-8 lg:p-12 animate-fade-in">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Users size={32} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">Group Health Insurance</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Customized group health plans for corporates, SMEs, and organizations — ensuring employee wellness
                    and retention with comprehensive coverage. Includes cashless hospitalization, maternity benefits,
                    pre-existing disease coverage, and flexible sum insured options.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Corporate Plans", "SME Solutions", "Employee Wellness", "Customized Coverage", "Cashless Network"].map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-display font-bold mb-4">Need Help Choosing the Right Plan?</h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Let our expert guide you to the perfect insurance solution for your needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-emerald-dark font-semibold text-base px-10">
                Get Free Consultation <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
