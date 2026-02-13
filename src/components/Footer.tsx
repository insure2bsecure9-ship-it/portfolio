import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-primary-foreground/70 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              {/* <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-sm">SJ</span>
              </div> */}
              <img src="/logo.png" alt="SJ Health Solutions" className="h-10 w-auto" />
              <span className="font-display font-bold text-lg text-primary-foreground">
                SJ Health Solutions
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Professional insurance advisory services by Satish Kumar Erra.
              Helping families make informed decisions for a secure future.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-primary-foreground text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Categories", to: "/categories" },
                { label: "Success", to: "/success" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-primary-foreground text-sm uppercase tracking-wider mb-4">
              Insurance Partners
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Star Health Insurance</li>
              <li>Care Health Insurance</li>
              <li>Tata AIG Insurance</li>
              <li>Tata AIA Life Insurance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} SJ Health Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
