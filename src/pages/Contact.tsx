import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", subtext: "Mon-Sat, 9AM - 7PM" },
  { icon: Mail, label: "Email", value: "satish@sjhealthsolutions.com", subtext: "We reply within 24 hours" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", subtext: "Serving clients nationwide" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9AM - 7PM", subtext: "Sunday by appointment" },
];

const faqs = [
  { q: "How do I choose the right health insurance plan?", a: "We analyze your family size, medical history, budget, and specific needs to recommend the most suitable plan from our partner insurers." },
  { q: "What is the claim filing process?", a: "We provide end-to-end claim support — from documentation to hospital coordination. We stand by you during every step of the process." },
  { q: "Can I switch from my current insurer?", a: "Yes! We can help you port your existing policy to a better plan while preserving your no-claim bonus and waiting period credits." },
  { q: "Do you charge consultation fees?", a: "No, our advisory services are completely free. We earn through commissions from insurance companies, ensuring unbiased guidance." },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you shortly." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-6">
              Let's <span className="text-accent">Secure Your Future</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Have questions about health or life insurance? Reach out for personalized, no-obligation advice
              from an experienced professional.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 bg-emerald-light">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((c, i) => (
                <div
                  key={c.label}
                  className="bg-background rounded-xl p-5 shadow-sm text-center animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <c.icon size={22} className="text-accent" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{c.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

    

        {/* FAQs */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
              <h2 className="text-3xl font-display font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                >
                  <h3 className="font-sans font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
