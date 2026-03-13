import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-accent" />
              <span className="font-heading text-xl font-bold text-primary-foreground">
                Jud Electricals
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Reliable electrical engineering solutions for homes, businesses, and industries across Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Specialties", path: "/specialties" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Earthing & Lightning Protection</li>
              <li>Electrical Installations</li>
              <li>Lighting Consulting</li>
              <li>Energy Audit</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                P.O. Box 5, Kokompe – Tema, Ghana
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                +233 547 656 141
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                +233 544 116 172
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                ceo.judelectricals@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Jud Electricals Limited Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
