import { Link } from "react-router";
import { TrendingUp, Users, Award, Target, Check, DollarSign, BookOpen, Headphones } from "lucide-react";
import { useState } from "react";

export default function Franchises() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    investment: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Franchise application:", formData);
    alert("Thank you for your interest! We'll contact you within 24 hours.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--espresso)] via-[var(--caramel)] to-[var(--gold)]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjAgOCAxNS4wNDIgOCAxMiA4IDguOTU4IDguOTU4IDggMTIgOGMzLjA0MiAwIDQgLjk1OCA0IDRtOCA4YzAgMi4yMDktMS43OTEgNC00IDRDOC45NTggMjggOCAxOS4wNDIgOCAxNiA4IDEyLjk1OCA4Ljk1OCAxMiAxMiAxMmMzLjA0MiAwIDQgLjk1OCA0IDQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--gold)]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[var(--gold)] mb-6">
            <TrendingUp className="w-5 h-5" />
            <span>Franchise Opportunities</span>
          </div>
          <h1 className="text-5xl sm:text-6xl text-white mb-6">
            Build Your Coffee Empire<br />with RuBico
          </h1>
          <p className="text-xl text-[var(--cream)] max-w-2xl mx-auto mb-8">
            Join our growing family of successful mobile coffee entrepreneurs. Low startup costs, proven system, unlimited potential.
          </p>
          <a
            href="#application"
            className="inline-block px-8 py-4 bg-[var(--gold)] text-[var(--espresso)] rounded-full text-lg hover:bg-[var(--cream)] transition-all shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Why RuBico */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Why Join RuBico?</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              A proven business model with comprehensive support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Low Investment</h3>
              <p className="text-[var(--caramel)]">
                Start your business with a fraction of traditional café costs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Complete Training</h3>
              <p className="text-[var(--caramel)]">
                Comprehensive barista and business training included
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Ongoing Support</h3>
              <p className="text-[var(--caramel)]">
                Dedicated support team available whenever you need help
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-[var(--espresso)]" />
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-2">Proven Brand</h3>
              <p className="text-[var(--caramel)]">
                Leverage our established reputation and marketing materials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[var(--espresso)] mb-6">What You Get as a Franchisee</h2>
              <p className="text-[var(--caramel)] mb-8 text-lg">
                Everything you need to launch and grow a successful mobile coffee business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Premium coffee cart and all equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">2-week intensive training program</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Marketing materials and brand assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Operational systems and software</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Supplier relationships and bulk pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">Territory protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">24/7 support hotline</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--caramel)]">National marketing campaigns</span>
                </li>
              </ul>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[var(--espresso)] to-[var(--gold)] rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Investment Overview</h2>
            <p className="text-xl text-[var(--caramel)] max-w-2xl mx-auto">
              Transparent pricing with strong ROI potential
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)] rounded-2xl p-8 md:p-12 text-white mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl mb-4">Initial Investment</h3>
                  <div className="text-5xl mb-4">$35K - $50K</div>
                  <p className="text-[var(--cream)]">
                    Includes equipment, training, and working capital
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-4">Potential Revenue</h3>
                  <div className="text-5xl mb-4">$100K+</div>
                  <p className="text-[var(--cream)]">
                    Annual revenue potential in first year*
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <h3 className="text-2xl text-[var(--espresso)] mb-6">What's Included in Your Investment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[var(--espresso)]">Franchise Fee</p>
                    <p className="text-sm text-[var(--caramel)]">$15,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[var(--espresso)]">Equipment Package</p>
                    <p className="text-sm text-[var(--caramel)]">$20,000 - $25,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[var(--espresso)]">Training & Setup</p>
                    <p className="text-sm text-[var(--caramel)]">Included</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[var(--espresso)]">Working Capital</p>
                    <p className="text-sm text-[var(--caramel)]">$5,000 - $10,000</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[var(--caramel)] mt-6">
                *Revenue potential varies by location, market conditions, and individual effort. Actual results may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Path to Ownership</h2>
            <p className="text-xl text-[var(--caramel)]">
              From application to launch in just 60 days
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "1", title: "Submit Application", desc: "Complete the form below with your information and background" },
                { step: "2", title: "Initial Review", desc: "Our team reviews your application within 48 hours" },
                { step: "3", title: "Discovery Call", desc: "30-minute conversation to discuss the opportunity and answer questions" },
                { step: "4", title: "Business Plan Review", desc: "We help you develop a plan for your local market" },
                { step: "5", title: "Agreement & Training", desc: "Sign franchise agreement and complete 2-week training program" },
                { step: "6", title: "Launch Your Business", desc: "Receive your equipment and start booking events!" },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[var(--espresso)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl text-[var(--espresso)] mb-2">{item.title}</h3>
                    <p className="text-[var(--caramel)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Franchisee Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <div className="text-[var(--gold)] text-4xl mb-4">"</div>
              <p className="text-[var(--caramel)] mb-6 text-lg">
                Best business decision I've ever made! RuBico gave me everything I needed to succeed. In my first year, I booked over 80 events and built a thriving business doing what I love.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center text-[var(--espresso)]">
                  MC
                </div>
                <div>
                  <p className="text-[var(--espresso)]">Michael Chen</p>
                  <p className="text-sm text-[var(--caramel)]">San Diego, CA • Joined 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-8">
              <div className="text-[var(--gold)] text-4xl mb-4">"</div>
              <p className="text-[var(--caramel)] mb-6 text-lg">
                The support from RuBico has been incredible. From training to ongoing help with marketing, they've been with me every step. I'm already looking to add a second cart!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center text-[var(--espresso)]">
                  JR
                </div>
                <div>
                  <p className="text-[var(--espresso)]">Jessica Rodriguez</p>
                  <p className="text-sm text-[var(--caramel)]">Austin, TX • Joined 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-20 bg-[var(--espresso)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Apply for a Franchise</h2>
            <p className="text-xl text-[var(--caramel)]">
              Take the first step toward coffee entrepreneurship
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--espresso)] mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-[var(--cream)] rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[var(--espresso)] mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[var(--cream)] rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--espresso)] mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-[var(--cream)] rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[var(--espresso)] mb-2">Desired Location *</label>
                <input
                  type="text"
                  required
                  placeholder="City, State"
                  className="w-full px-4 py-3 bg-[var(--cream)] rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-[var(--espresso)] mb-2">Business Experience</label>
              <select
                className="w-full px-4 py-3 bg-[var(--cream)] rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              >
                <option value="">Select one</option>
                <option value="none">No business experience</option>
                <option value="some">Some business experience</option>
                <option value="extensive">Extensive business experience</option>
                <option value="franchise">Previous franchise owner</option>
              </select>
            </div>

            <div>
              <label className="block text-[var(--espresso)] mb-2">Available Investment</label>
              <select
                className="w-full px-4 py-3 bg-[var(--cream)] rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                value={formData.investment}
                onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
              >
                <option value="">Select range</option>
                <option value="35-50k">$35,000 - $50,000</option>
                <option value="50-75k">$50,000 - $75,000</option>
                <option value="75k+">$75,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-[var(--espresso)] mb-2">Tell Us About Yourself</label>
              <textarea
                rows={5}
                placeholder="Why are you interested in a RuBico franchise? What are your goals?"
                className="w-full px-4 py-3 bg-[var(--cream)] rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[var(--espresso)] text-[var(--cream)] rounded-full text-lg hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
