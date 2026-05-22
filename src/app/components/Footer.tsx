import { Link } from "react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--espresso)] text-[var(--cream)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <span className="text-2xl">☕</span>
              </div>
              <span className="text-2xl font-semibold">RuBico</span>
            </div>
            <p className="text-[var(--caramel)] mb-4">
              Bringing the café experience to your door with barista-crafted coffee and memorable moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[var(--gold)]/20 rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--gold)]/20 rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/setups" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events/corporate" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/events/weddings" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link to="/franchises" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
                  Franchising
                </Link>
              </li>
              <li>
                <Link to="/flair-espresso" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
                  Flair Espresso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--caramel)]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--caramel)]">hello@rubico.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--caramel)]">Serving nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--gold)]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--caramel)] text-sm">
            © 2026 RuBico. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--caramel)] hover:text-[var(--gold)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
