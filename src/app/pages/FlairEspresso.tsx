import { Link } from "react-router";
import { Award, Wrench, Home, ShoppingCart, Check } from "lucide-react";

export default function FlairEspresso() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)] to-[var(--espresso)]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjAgOCAxNS4wNDIgOCAxMiA4IDguOTU4IDguOTU4IDggMTIgOGMzLjA0MiAwIDQgLjk1OCA0IDRtOCA4YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjggOCAxOS4wNDIgOCAxNiA4IDEyLjk1OCA4Ljk1OCAxMiAxMiAxMmMzLjA0MiAwIDQgLjk1OCA0IDQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white mb-6">
            <Award className="w-5 h-5" />
            <span>Premium Manual Espresso</span>
          </div>
          <h1 className="text-5xl sm:text-6xl text-white mb-6">
            Flair Espresso<br />Machines
          </h1>
          <p className="text-xl text-[var(--cream)] max-w-2xl mx-auto mb-8">
            Professional-grade manual espresso machines for home enthusiasts and mobile coffee businesses. Craft café-quality shots anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#shop"
              className="inline-block px-8 py-4 bg-white text-[var(--espresso)] rounded-full text-lg hover:bg-[var(--gold)] transition-all shadow-lg"
            >
              Shop Now
            </a>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full text-lg hover:bg-white hover:text-[var(--espresso)] transition-all"
            >
              Wholesale Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Why Flair */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Why Flair Espresso?</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              The perfect blend of craftsmanship, portability, and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Professional Quality</h3>
              <p className="text-[var(--caramel)]">
                Achieve café-quality espresso with precise temperature and pressure control
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Portable Design</h3>
              <p className="text-[var(--caramel)]">
                No electricity needed — perfect for home, travel, or mobile coffee businesses
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Built to Last</h3>
              <p className="text-[var(--caramel)]">
                Durable construction with premium materials for years of reliable service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Perfect For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl text-[var(--espresso)] mb-4">Home Enthusiasts</h3>
              <p className="text-[var(--caramel)] mb-6">
                Elevate your morning routine with barista-quality espresso without the bulk or cost of traditional machines.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[var(--caramel)]">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>No electricity required</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--caramel)]">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Easy to clean and maintain</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--caramel)]">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Minimal counter space</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[var(--gold)]">
              <h3 className="text-2xl text-[var(--espresso)] mb-4">Mobile Coffee Carts</h3>
              <p className="text-[var(--caramel)] mb-6">
                The ideal solution for mobile businesses that need professional results without relying on power sources.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[var(--caramel)]">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Operate anywhere</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--caramel)]">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Professional shots every time</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--caramel)]">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Low maintenance costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl text-[var(--espresso)] mb-4">Small Cafés</h3>
              <p className="text-[var(--caramel)] mb-6">
                Start your coffee shop with minimal investment while still delivering premium quality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[var(--caramel)]">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Affordable entry point</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--caramel)]">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Artisanal appeal</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--caramel)]">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Backup for peak hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Our Flair Collection</h2>
            <p className="text-xl text-[var(--caramel)]">
              Choose the model that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Classic */}
            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-[var(--caramel)] to-[var(--gold)] rounded-xl mb-6"></div>
              <h3 className="text-2xl text-[var(--espresso)] mb-2">Flair Classic</h3>
              <p className="text-[var(--caramel)] mb-4">Entry-level manual espresso</p>
              <div className="text-3xl text-[var(--espresso)] mb-6">$159</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-[var(--caramel)]">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Manual pressure lever</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--caramel)]">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Durable aluminum construction</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--caramel)]">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Includes portafilter & tamper</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-[var(--espresso)] text-[var(--cream)] rounded-full hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all">
                Add to Cart
              </button>
            </div>

            {/* Signature (Featured) */}
            <div className="bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)] rounded-2xl p-8 text-white relative transform scale-105">
              <div className="absolute -top-4 right-8 bg-[var(--gold)] text-[var(--espresso)] px-4 py-1 rounded-full text-sm">
                Best Seller
              </div>
              <div className="aspect-square bg-gradient-to-br from-[var(--gold)] to-white/20 rounded-xl mb-6"></div>
              <h3 className="text-2xl mb-2">Flair Signature</h3>
              <p className="text-[var(--cream)] mb-4">Professional performance</p>
              <div className="text-3xl mb-6">$329</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Precision pressure gauge</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Stainless steel brew head</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>58mm portafilter</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Travel case included</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-[var(--gold)] text-[var(--espresso)] rounded-full hover:bg-white transition-all">
                Add to Cart
              </button>
            </div>

            {/* Pro 2 */}
            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)] rounded-xl mb-6"></div>
              <h3 className="text-2xl text-[var(--espresso)] mb-2">Flair Pro 2</h3>
              <p className="text-[var(--caramel)] mb-4">Ultimate espresso control</p>
              <div className="text-3xl text-[var(--espresso)] mb-6">$499</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-[var(--caramel)]">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Electronic pressure sensor</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--caramel)]">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Pre-heated brew chamber</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--caramel)]">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Professional 58mm portafilter</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--caramel)]">
                  <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Premium accessories kit</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-[var(--espresso)] text-[var(--cream)] rounded-full hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[var(--caramel)] mb-6">
              Free shipping on all orders. 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Wholesale */}
      <section className="py-20 bg-[var(--espresso)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-white mb-6">Wholesale & Bulk Orders</h2>
              <p className="text-[var(--caramel)] mb-8 text-lg">
                Special pricing available for mobile coffee businesses, cafés, and RuBico franchisees.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Volume discounts for multiple units</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Priority shipping and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Extended warranty options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Business training and resources</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-[var(--gold)] text-[var(--espresso)] rounded-full text-lg hover:bg-white transition-all shadow-lg"
              >
                Request Wholesale Pricing
              </Link>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[var(--gold)] to-[var(--cream)] rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
