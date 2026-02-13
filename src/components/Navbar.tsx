import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Categories", href: "/categories" },
  { label: "Success", href: "/success" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          {/* <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">SJ</span>
          </div> */}
          <img src="/logo.png" alt="SJ Health Solutions" className="h-10 w-auto" />
          <span className="font-display font-bold text-xl text-primary hidden sm:inline">
            SJ Health Solutions
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.href
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:inline-flex">
          <Button className="bg-accent text-accent-foreground hover:bg-emerald-dark font-semibold">
            Get Expert Advice
          </Button>
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 animate-fade-in">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${location.pathname === link.href
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-3 bg-accent text-accent-foreground hover:bg-emerald-dark font-semibold">
              Get Expert Advice
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
