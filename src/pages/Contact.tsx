import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Custom WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "9032412833",
    subtext: "Call us anytime"
  },
  {
    icon: Mail,
    label: "Email",
    value: "insure2bsecure9@gmail.com",
    subtext: "We reply within 24 hours"
  },
  {
    icon: Clock,
    label: "Available Hours",
    value: "Mon - Sat: 9AM - 7PM",
    subtext: "By appointment"
  }
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10 animate-fade-in">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold mb-6 tracking-tight">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We are here to help you secure your future. reach out to us for personalized insurance advice.
            </p>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {contactDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border/50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                      <detail.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-foreground">{detail.label}</h3>
                    <p className="text-muted-foreground font-medium mb-1">{detail.value}</p>
                    <p className="text-sm text-muted-foreground/80">{detail.subtext}</p>
                  </div>
                ))}
              </div>

              {/* WhatsApp Action */}
              <div className="mt-16 text-center animate-fade-in-up">
                <a
                  href="https://wa.me/919032412833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 gap-3"
                  >
                    <WhatsAppIcon className="w-6 h-6 fill-current" />
                    Chat on WhatsApp
                  </Button>
                </a>
                <p className="mt-4 text-muted-foreground">
                  Click above to chat with us directly on WhatsApp for instant queries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
