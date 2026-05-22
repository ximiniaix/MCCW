import { Link } from "react-router";
import { Users, Briefcase, Zap, Award, Check } from "lucide-react";

export default function CorporateEvents() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjAgOCAxNS4wNDIgOCAxMiA4IDguOTU4IDguOTU4IDggMTIgOGMzLjA0MiAwIDQgLjk1OCA0IDRtOCA4YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjggOCAxOS4wNDIgOCAxNiA4IDEyLjk1OCA4Ljk1OCAxMiAxMiAxMmMzLjA0MiAwIDQgLjk1OCA0IDQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--gold)]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[var(--gold)] mb-6">
            <Briefcase className="w-5 h-5" />
            <span>Corporate Coffee Service</span>
          </div>
          <h1 className="text-5xl sm:text-6xl text-white mb-6">
            Elevate Your Corporate Events
          </h1>
          <p className="text-xl text-[var(--cream)] max-w-2xl mx-auto mb-8">
            Premium coffee experiences that impress clients, energize teams, and make your business events truly memorable.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[var(--gold)] text-[var(--espresso)] rounded-full text-lg hover:bg-[var(--cream)] transition-all shadow-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Why Choose RuBico for Your Corporate Events?</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              We bring more than just coffee — we bring an experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <div className="w-14 h-14 bg-[var(--gold)] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[var(--espresso)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Professional Service</h3>
              <p className="text-[var(--caramel)]">
                Our trained baristas deliver exceptional service with a smile, creating positive interactions that reflect well on your brand.
              </p>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <div className="w-14 h-14 bg-[var(--gold)] rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[var(--espresso)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Quick Setup</h3>
              <p className="text-[var(--caramel)]">
                We arrive early, set up seamlessly, and disappear just as smoothly — no hassle, no stress for your event team.
              </p>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <div className="w-14 h-14 bg-[var(--gold)] rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-[var(--espresso)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Premium Quality</h3>
              <p className="text-[var(--caramel)]">
                Using specialty-grade beans and professional equipment, we serve café-quality drinks that truly impress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Perfect For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Product Launches & Grand Openings",
              "Conferences & Trade Shows",
              "Team Building Events",
              "Client Appreciation Events",
              "Office Parties & Celebrations",
              "Networking Mixers",
              "Board Meetings & Executive Retreats",
              "Company Milestones",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 bg-white rounded-xl p-6">
                <div className="w-8 h-8 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[var(--espresso)]" />
                </div>
                <span className="text-[var(--espresso)] text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Service Packages</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              Flexible options to match your event size and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential */}
            <div className="bg-[var(--cream)] rounded-2xl p-8 border-2 border-transparent hover:border-[var(--gold)] transition-all">
              <h3 className="text-2xl text-[var(--espresso)] mb-2">Essential</h3>
              <p className="text-[var(--caramel)] mb-6">Perfect for small gatherings</p>
              <div className="mb-6">
                <span className="text-4xl text-[var(--espresso)]">$499</span>
                <span className="text-[var(--caramel)]"> / event</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Up to 25 guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">2-hour service</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">1 professional barista</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Standard menu (espresso, cappuccino, latte)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Classic cart setup</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center px-6 py-3 bg-[var(--espresso)] text-[var(--cream)] rounded-full hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all"
              >
                Book Now
              </Link>
            </div>

            {/* Professional (Featured) */}
            <div className="bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)] rounded-2xl p-8 text-white relative">
              <div className="absolute -top-4 right-8 bg-[var(--gold)] text-[var(--espresso)] px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl mb-2">Professional</h3>
              <p className="text-[var(--cream)] mb-6">Ideal for mid-size events</p>
              <div className="mb-6">
                <span className="text-4xl">$899</span>
                <span className="text-[var(--cream)]"> / event</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Up to 75 guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>4-hour service</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>2 professional baristas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Premium menu + seasonal specialties</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Custom branded cups available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Premium cart with signage</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center px-6 py-3 bg-[var(--gold)] text-[var(--espresso)] rounded-full hover:bg-white transition-all"
              >
                Book Now
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-[var(--cream)] rounded-2xl p-8 border-2 border-transparent hover:border-[var(--gold)] transition-all">
              <h3 className="text-2xl text-[var(--espresso)] mb-2">Premium</h3>
              <p className="text-[var(--caramel)] mb-6">For large corporate events</p>
              <div className="mb-6">
                <span className="text-4xl text-[var(--espresso)]">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">100+ guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Full-day or multi-day service</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Multiple baristas & stations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Fully customized menu</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Complete branding integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Dedicated event coordinator</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center px-6 py-3 bg-[var(--espresso)] text-[var(--cream)] rounded-full hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Branding */}
      <section className="py-20 bg-[var(--espresso)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-white mb-6">Custom Branding Options</h2>
              <p className="text-[var(--caramel)] mb-8 text-lg">
                Make the coffee experience part of your brand story. We offer full customization to align with your corporate identity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Custom branded cups, sleeves, and napkins</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Logo integration on cart signage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Custom drink menu themed to your event</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Branded latte art stencils</span>
                </li>
              </ul>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[var(--gold)] to-[var(--caramel)] rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--caramel)] to-[var(--gold)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[var(--espresso)] mb-6">Ready to Impress Your Team & Clients?</h2>
          <p className="text-xl text-[var(--espresso)]/80 mb-8">
            Let's discuss how we can make your next corporate event exceptional.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[var(--espresso)] text-[var(--cream)] rounded-full text-lg hover:bg-white hover:text-[var(--espresso)] transition-all shadow-lg"
          >
            Request Your Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
