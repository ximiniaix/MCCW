import { Link } from "react-router";
import { Heart, Sparkles, Camera, Clock, Check } from "lucide-react";

export default function Weddings() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)] via-[var(--caramel)] to-[var(--espresso)]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjAgOCAxNS4wNDIgOCAxMiA4IDguOTU4IDguOTU4IDggMTIgOGMzLjA0MiAwIDQgLjk1OCA0IDRtOCA4YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjggOCAxOS4wNDIgOCAxNiA4IDEyLjk1OCA4Ljk1OCAxMiAxMiAxMmMzLjA0MiAwIDQgLjk1OCA0IDQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white mb-6">
            <Heart className="w-5 h-5" />
            <span>Wedding Coffee Service</span>
          </div>
          <h1 className="text-5xl sm:text-6xl text-white mb-6">
            A Warm Touch for Your<br />Special Day
          </h1>
          <p className="text-xl text-[var(--cream)] max-w-2xl mx-auto mb-8">
            Add sophistication and warmth to your wedding with our beautiful coffee cart service and artisan beverages.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-[var(--espresso)] rounded-full text-lg hover:bg-[var(--gold)] transition-all shadow-lg"
          >
            Book Your Date
          </Link>
        </div>
      </section>

      {/* Why Coffee at Weddings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Why Add Coffee to Your Wedding?</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              More than just a beverage — an experience your guests will love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--gold)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Instagram-Worthy</h3>
              <p className="text-[var(--caramel)]">
                Our beautifully styled carts and latte art create picture-perfect moments
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--gold)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Unique Touch</h3>
              <p className="text-[var(--caramel)]">
                Stand out from typical wedding beverages with specialty coffee
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--gold)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Perfect Timing</h3>
              <p className="text-[var(--caramel)]">
                Keep guests energized during cocktail hour or late-night dancing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--gold)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Guest Favorite</h3>
              <p className="text-[var(--caramel)]">
                Everyone loves great coffee — it's a crowd-pleaser for all ages
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Moments */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Perfect for Every Moment</h2>
            <p className="text-xl text-[var(--caramel)]">
              We adapt to your timeline and venue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl text-[var(--espresso)] mb-4">Morning/Brunch Weddings</h3>
              <p className="text-[var(--caramel)] mb-6">
                Start the celebration right with fresh espresso drinks, cappuccinos, and specialty lattes as guests arrive.
              </p>
              <div className="text-sm text-[var(--gold)]">8AM - 1PM Service</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl text-[var(--espresso)] mb-4">Cocktail Hour</h3>
              <p className="text-[var(--caramel)] mb-6">
                Offer an upscale alternative to the bar while guests mingle and enjoy hors d'oeuvres.
              </p>
              <div className="text-sm text-[var(--gold)]">4PM - 7PM Service</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl text-[var(--espresso)] mb-4">Late Night Energy</h3>
              <p className="text-[var(--caramel)] mb-6">
                Keep the party going with coffee drinks and espresso shots for guests hitting the dance floor.
              </p>
              <div className="text-sm text-[var(--gold)]">9PM - Midnight Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Wedding Packages</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              Crafted to complement your perfect day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Classic Romance */}
            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <h3 className="text-2xl text-[var(--espresso)] mb-2">Classic Romance</h3>
              <p className="text-[var(--caramel)] mb-6">Intimate celebrations</p>
              <div className="mb-6">
                <span className="text-4xl text-[var(--espresso)]">$799</span>
                <span className="text-[var(--caramel)]"> / event</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Up to 50 guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">3-hour service</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">1-2 professional baristas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Signature espresso menu</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Elegant cart styling</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Custom signage</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center px-6 py-3 bg-[var(--espresso)] text-[var(--cream)] rounded-full hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all"
              >
                Book Now
              </Link>
            </div>

            {/* Grand Celebration */}
            <div className="bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)] rounded-2xl p-8 text-white relative transform scale-105">
              <div className="absolute -top-4 right-8 bg-[var(--gold)] text-[var(--espresso)] px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl mb-2">Grand Celebration</h3>
              <p className="text-[var(--cream)] mb-6">Full wedding experience</p>
              <div className="mb-6">
                <span className="text-4xl">$1,499</span>
                <span className="text-[var(--cream)]"> / event</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Up to 150 guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>5-hour service</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>2-3 professional baristas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Premium menu + seasonal drinks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Custom latte art with initials</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Themed cart decor to match wedding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>Personalized menu boards</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center px-6 py-3 bg-[var(--gold)] text-[var(--espresso)] rounded-full hover:bg-white transition-all"
              >
                Book Now
              </Link>
            </div>

            {/* Luxury Experience */}
            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <h3 className="text-2xl text-[var(--espresso)] mb-2">Luxury Experience</h3>
              <p className="text-[var(--caramel)] mb-6">Unforgettable elegance</p>
              <div className="mb-6">
                <span className="text-4xl text-[var(--espresso)]">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Unlimited guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">All-day service available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Multiple cart stations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Fully customized menu</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Premium floral cart styling</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Signature drink creation</span>
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

      {/* Customization */}
      <section className="py-20 bg-[var(--espresso)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-[var(--gold)] to-[var(--cream)] rounded-2xl"></div>
            <div>
              <h2 className="text-4xl text-white mb-6">Personalized for Your Love Story</h2>
              <p className="text-[var(--caramel)] mb-8 text-lg">
                Every detail can be customized to match your wedding theme and colors.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Cart styling in your wedding colors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Custom latte art with initials or wedding date</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Signature drink named after the couple</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Floral arrangements matching your bouquet</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--cream)]">Coordinated signage and menu boards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Love from Newlyweds</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 text-[var(--gold)] mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-[var(--caramel)] mb-6 text-lg">
                "The coffee cart was hands down one of our guests' favorite parts of our wedding! The latte art with our initials was so special, and the baristas were absolutely wonderful. Highly recommend!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center text-[var(--espresso)]">
                  EJ
                </div>
                <div>
                  <p className="text-[var(--espresso)]">Emily & James</p>
                  <p className="text-sm text-[var(--caramel)]">September 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 text-[var(--gold)] mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-[var(--caramel)] mb-6 text-lg">
                "We had RuBico at our evening reception and it was perfect! Guests loved the coffee while dancing, and the cart looked beautiful in all our photos. Thank you for making our day special!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center text-[var(--espresso)]">
                  AR
                </div>
                <div>
                  <p className="text-[var(--espresso)]">Alex & Ryan</p>
                  <p className="text-sm text-[var(--caramel)]">November 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--gold)] via-[var(--caramel)] to-[var(--espresso)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">Let's Make Your Day Even More Special</h2>
          <p className="text-xl text-[var(--cream)] mb-8">
            Book your wedding coffee service today and add a warm, memorable touch to your celebration.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-[var(--espresso)] rounded-full text-lg hover:bg-[var(--gold)] transition-all shadow-lg"
          >
            Check Availability for Your Date
          </Link>
        </div>
      </section>
    </div>
  );
}
