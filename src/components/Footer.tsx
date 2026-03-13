import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-electric opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-electric flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-secondary-foreground block leading-tight">
                  Jud Electricals
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-electric font-medium">
                  Limited Company
                </span>
              </div>
            </div>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed max-w-xs">
              Delivering safe, reliable, and innovative electrical solutions across domestic, commercial, and industrial sectors in Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-secondary-foreground mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
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
                    className="text-sm text-secondary-foreground/50 hover:text-electric transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-secondary-foreground mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/50">
              <li>Earthing & Lightning Protection</li>
              <li>Electrical Installations</li>
              <li>Lighting Consulting</li>
              <li>Energy Audit</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-secondary-foreground mb-5 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/50">
                <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-electric" />
                </div>
                <span>P.O. Box 5, Kokompe – Tema, Ghana</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/50">
                <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-electric" />
                </div>
                <div>
                  <div>+233 547 656 141</div>
                  <div>+233 544 116 172</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/50">
                <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-electric" />
                </div>
                ceo.judelectricals@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/40">
            © {new Date().getFullYear()} Jud Electricals Limited Company. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/30">
            Electrical Contractor • Tema, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
