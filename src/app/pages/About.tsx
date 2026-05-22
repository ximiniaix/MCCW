import { Coffee, Heart, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl text-white mb-6">Our Story</h1>
          <p className="text-xl text-[var(--cream)] max-w-2xl mx-auto">
            From a single cart to a nationwide movement — bringing café culture wherever it's needed most.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="aspect-square bg-gradient-to-br from-[var(--caramel)] to-[var(--gold)] rounded-2xl"></div>
            <div>
              <h2 className="text-4xl text-[var(--espresso)] mb-6">How It All Began</h2>
              <div className="space-y-4 text-[var(--caramel)] text-lg">
                <p>
                  RuBico started with a simple idea: what if you could bring the warmth and quality of a great coffee shop to any location, any event?
                </p>
                <p>
                  In 2020, our founder purchased a vintage cart, restored it by hand, and started serving espresso at local farmers markets. The response was overwhelming — people didn't just want great coffee, they wanted the experience that came with it.
                </p>
                <p>
                  What began as weekend markets quickly grew into weddings, corporate events, and everything in between. Today, RuBico operates in cities nationwide, with a growing family of franchisees who share our passion for exceptional coffee and genuine hospitality.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Our Values</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-3">Quality First</h3>
              <p className="text-[var(--caramel)]">
                We never compromise on the quality of our coffee, equipment, or service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-3">Warm Hospitality</h3>
              <p className="text-[var(--caramel)]">
                Every interaction should feel like visiting your favorite local café.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-3">Community</h3>
              <p className="text-[var(--caramel)]">
                We're building a community of coffee lovers and entrepreneurs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-3">Excellence</h3>
              <p className="text-[var(--caramel)]">
                We strive for excellence in every cup, every setup, every event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[var(--espresso)] mb-6">Our Mission</h2>
          <p className="text-2xl text-[var(--caramel)] leading-relaxed">
            To bring the café experience beyond traditional walls — creating memorable moments,
            supporting entrepreneurs, and proving that exceptional coffee can happen anywhere.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Meet the Team</h2>
            <p className="text-xl text-[var(--caramel)]">
              The people behind the coffee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-[var(--caramel)] to-[var(--gold)] rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Alex Rivera</h3>
              <p className="text-[var(--gold)] mb-3">Founder & CEO</p>
              <p className="text-[var(--caramel)]">
                Former café owner turned mobile coffee pioneer with 15+ years in specialty coffee.
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-[var(--gold)] to-[var(--espresso)] rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Jordan Lee</h3>
              <p className="text-[var(--gold)] mb-3">Head of Operations</p>
              <p className="text-[var(--caramel)]">
                Event management expert ensuring every RuBico experience is flawless.
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)] rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Sam Martinez</h3>
              <p className="text-[var(--gold)] mb-3">Franchise Director</p>
              <p className="text-[var(--caramel)]">
                Supporting franchisees with training, resources, and ongoing success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[var(--espresso)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl text-[var(--gold)] mb-3">2020</div>
              <p className="text-[var(--caramel)]">Founded</p>
            </div>
            <div>
              <div className="text-5xl text-[var(--gold)] mb-3">500+</div>
              <p className="text-[var(--caramel)]">Events Served</p>
            </div>
            <div>
              <div className="text-5xl text-[var(--gold)] mb-3">25+</div>
              <p className="text-[var(--caramel)]">Franchise Partners</p>
            </div>
            <div>
              <div className="text-5xl text-[var(--gold)] mb-3">50K+</div>
              <p className="text-[var(--caramel)]">Cups Served</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
