import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[var(--espresso)] rounded-full flex items-center justify-center">
              <span className="text-2xl text-[var(--cream)]">☕</span>
            </div>
            <span className="text-2xl font-semibold text-[var(--espresso)]">RuBico</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/") ? "text-[var(--espresso)]" : "text-[var(--caramel)] hover:text-[var(--espresso)]"
              }`}
            >
              Home
            </Link>

            {/* Events Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEventsDropdownOpen(true)}
              onMouseLeave={() => setEventsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-[var(--caramel)] hover:text-[var(--espresso)] transition-colors">
                Events <ChevronDown className="w-4 h-4" />
              </button>
              {eventsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-[var(--border)] py-2">
                  <Link
                    to="/events/corporate"
                    className="block px-4 py-3 text-[var(--caramel)] hover:bg-[var(--cream)] hover:text-[var(--espresso)] transition-colors"
                  >
                    Corporate Events
                  </Link>
                  <Link
                    to="/events/weddings"
                    className="block px-4 py-3 text-[var(--caramel)] hover:bg-[var(--cream)] hover:text-[var(--espresso)] transition-colors"
                  >
                    Weddings & Private Events
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/franchises"
              className={`transition-colors ${
                isActive("/franchises") ? "text-[var(--espresso)]" : "text-[var(--caramel)] hover:text-[var(--espresso)]"
              }`}
            >
              Franchises
            </Link>
            <Link
              to="/setups"
              className={`transition-colors ${
                isActive("/setups") ? "text-[var(--espresso)]" : "text-[var(--caramel)] hover:text-[var(--espresso)]"
              }`}
            >
              Setups
            </Link>
            <Link
              to="/flair-espresso"
              className={`transition-colors ${
                isActive("/flair-espresso") ? "text-[var(--espresso)]" : "text-[var(--caramel)] hover:text-[var(--espresso)]"
              }`}
            >
              Flair Espresso
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about") ? "text-[var(--espresso)]" : "text-[var(--caramel)] hover:text-[var(--espresso)]"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[var(--espresso)] text-[var(--cream)] rounded-full hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--espresso)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--border)]">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-[var(--caramel)] hover:text-[var(--espresso)]" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/events/corporate" className="text-[var(--caramel)] hover:text-[var(--espresso)] pl-4" onClick={() => setMobileMenuOpen(false)}>
                Corporate Events
              </Link>
              <Link to="/events/weddings" className="text-[var(--caramel)] hover:text-[var(--espresso)] pl-4" onClick={() => setMobileMenuOpen(false)}>
                Weddings & Private Events
              </Link>
              <Link to="/franchises" className="text-[var(--caramel)] hover:text-[var(--espresso)]" onClick={() => setMobileMenuOpen(false)}>
                Franchises
              </Link>
              <Link to="/setups" className="text-[var(--caramel)] hover:text-[var(--espresso)]" onClick={() => setMobileMenuOpen(false)}>
                Setups
              </Link>
              <Link to="/flair-espresso" className="text-[var(--caramel)] hover:text-[var(--espresso)]" onClick={() => setMobileMenuOpen(false)}>
                Flair Espresso
              </Link>
              <Link to="/about" className="text-[var(--caramel)] hover:text-[var(--espresso)]" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-[var(--espresso)] text-[var(--cream)] rounded-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
