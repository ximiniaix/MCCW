import { Link } from "react-router";
import { Coffee, Users, Heart, TrendingUp, Award, Clock } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--espresso)] via-[var(--caramel)] to-[var(--gold)]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjAgOCAxNS4wNDIgOCAxMiA4IDguOTU4IDguOTU4IDggMTIgOGMzLjA0MiAwIDQgLjk1OCA0IDRtOCA4YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjggOCAxOS4wNDIgOCAxNiA4IDEyLjk1OCA4Ljk1OCAxMiAxMiAxMmMzLjA0MiAwIDQgLjk1OCA0IDQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Bringing the Café Experience<br />
            <span className="text-[var(--gold)]">to Your Door</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--cream)] mb-12 max-w-3xl mx-auto">
            Freshly brewed coffee, beautiful latte art, and memorable moments — delivered to your event, wedding, or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[var(--gold)] text-[var(--espresso)] rounded-full text-lg hover:bg-[var(--cream)] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Your Event
            </Link>
            <Link
              to="/setups"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full text-lg hover:bg-white hover:text-[var(--espresso)] transition-all shadow-lg"
            >
              Explore Setups
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">What We Offer</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              Premium coffee experiences tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Events */}
            <Link
              to="/events/corporate"
              className="group bg-[var(--cream)] rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[var(--espresso)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                <Users className="w-8 h-8 text-[var(--cream)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Corporate Events</h3>
              <p className="text-[var(--caramel)] mb-4">
                Elevate your business gatherings with premium coffee service that impresses clients and energizes teams.
              </p>
              <span className="text-[var(--gold)] group-hover:underline">Learn More →</span>
            </Link>

            {/* Weddings */}
            <Link
              to="/events/weddings"
              className="group bg-[var(--cream)] rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[var(--espresso)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                <Heart className="w-8 h-8 text-[var(--cream)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Weddings & Events</h3>
              <p className="text-[var(--caramel)] mb-4">
                Add a touch of warmth and sophistication to your special day with our beautiful coffee cart setups.
              </p>
              <span className="text-[var(--gold)] group-hover:underline">Learn More →</span>
            </Link>

            {/* Restaurant Setups */}
            <div className="group bg-[var(--cream)] rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--espresso)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                <Coffee className="w-8 h-8 text-[var(--cream)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Restaurant & Home Setups</h3>
              <p className="text-[var(--caramel)] mb-4">
                Custom coffee stations for restaurants, offices, and homes. Bring café quality to your space.
              </p>
              <span className="text-[var(--gold)] group-hover:underline">Explore Options →</span>
            </div>

            {/* Franchising */}
            <Link
              to="/franchises"
              className="group bg-[var(--cream)] rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[var(--espresso)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                <TrendingUp className="w-8 h-8 text-[var(--cream)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Franchise Opportunities</h3>
              <p className="text-[var(--caramel)] mb-4">
                Join the RuBico family and build your own mobile coffee business with our proven system.
              </p>
              <span className="text-[var(--gold)] group-hover:underline">Apply Now →</span>
            </Link>

            {/* Flair Espresso */}
            <Link
              to="/flair-espresso"
              className="group bg-[var(--cream)] rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[var(--espresso)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                <Award className="w-8 h-8 text-[var(--cream)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">Flair Espresso Machines</h3>
              <p className="text-[var(--caramel)] mb-4">
                Premium manual espresso machines for home enthusiasts and mobile coffee businesses.
              </p>
              <span className="text-[var(--gold)] group-hover:underline">Shop Now →</span>
            </Link>

            {/* Setups Gallery */}
            <Link
              to="/setups"
              className="group bg-[var(--cream)] rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[var(--espresso)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                <Clock className="w-8 h-8 text-[var(--cream)]" />
              </div>
              <h3 className="text-2xl text-[var(--espresso)] mb-3">View Our Setups</h3>
              <p className="text-[var(--caramel)] mb-4">
                Browse our portfolio of beautiful coffee cart setups from events, weddings, and more.
              </p>
              <span className="text-[var(--gold)] group-hover:underline">View Gallery →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gallery Teaser */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Our Coffee Carts in Action</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square bg-gradient-to-br from-[var(--caramel)] to-[var(--gold)] rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity">Wedding Setup</span>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[var(--gold)] to-[var(--espresso)] rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity">Corporate Event</span>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)] rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity">Private Party</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/setups"
              className="inline-block px-8 py-4 bg-[var(--espresso)] text-[var(--cream)] rounded-full hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all shadow-lg"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-[var(--caramel)]">
              Trusted by businesses and loved by guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--cream)] rounded-2xl p-8 shadow-sm">
              <div className="text-[var(--gold)] text-4xl mb-4">"</div>
              <p className="text-[var(--caramel)] mb-6">
                RuBico made our corporate event unforgettable. The coffee was exceptional and the cart added such a sophisticated touch. Our clients were impressed!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center text-[var(--espresso)]">
                  SM
                </div>
                <div>
                  <p className="text-[var(--espresso)]">Sarah Martinez</p>
                  <p className="text-sm text-[var(--caramel)]">Event Coordinator, Tech Corp</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-8 shadow-sm">
              <div className="text-[var(--gold)] text-4xl mb-4">"</div>
              <p className="text-[var(--caramel)] mb-6">
                Having RuBico at our wedding was the best decision! The latte art was stunning and our guests loved the personalized experience. Highly recommend!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center text-[var(--espresso)]">
                  EJ
                </div>
                <div>
                  <p className="text-[var(--espresso)]">Emily & James</p>
                  <p className="text-sm text-[var(--caramel)]">Newlyweds</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-8 shadow-sm">
              <div className="text-[var(--gold)] text-4xl mb-4">"</div>
              <p className="text-[var(--caramel)] mb-6">
                The franchise support is incredible. RuBico provided everything I needed to launch my mobile coffee business successfully. Best investment ever!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center text-[var(--espresso)]">
                  MC
                </div>
                <div>
                  <p className="text-[var(--espresso)]">Michael Chen</p>
                  <p className="text-sm text-[var(--caramel)]">Franchise Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-[var(--espresso)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-[var(--gold)] mb-2">500+</div>
              <p className="text-[var(--caramel)]">Events Served</p>
            </div>
            <div>
              <div className="text-4xl text-[var(--gold)] mb-2">50K+</div>
              <p className="text-[var(--caramel)]">Cups of Coffee</p>
            </div>
            <div>
              <div className="text-4xl text-[var(--gold)] mb-2">98%</div>
              <p className="text-[var(--caramel)]">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl text-[var(--gold)] mb-2">25+</div>
              <p className="text-[var(--caramel)]">Franchise Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--caramel)] to-[var(--gold)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[var(--espresso)] mb-6">Ready to Bring the Café to You?</h2>
          <p className="text-xl text-[var(--espresso)]/80 mb-8">
            Let's create something special together. Book your event or start your franchise journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[var(--espresso)] text-[var(--cream)] rounded-full text-lg hover:bg-white hover:text-[var(--espresso)] transition-all shadow-lg"
            >
              Book Your Event
            </Link>
            <Link
              to="/franchises"
              className="px-8 py-4 bg-white text-[var(--espresso)] rounded-full text-lg hover:bg-[var(--espresso)] hover:text-[var(--cream)] transition-all shadow-lg"
            >
              Explore Franchising
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
