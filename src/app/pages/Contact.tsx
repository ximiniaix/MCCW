import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-[var(--cream)] max-w-2xl mx-auto">
            Let's create something special together. Book your event or ask us anything.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl text-[var(--espresso)] mb-8">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--espresso)]" />
                  </div>
                  <div>
                    <h3 className="text-[var(--espresso)] mb-1">Phone</h3>
                    <p className="text-[var(--caramel)]">+1 (555) 123-4567</p>
                    <p className="text-sm text-[var(--caramel)]">Mon-Fri 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--espresso)]" />
                  </div>
                  <div>
                    <h3 className="text-[var(--espresso)] mb-1">Email</h3>
                    <p className="text-[var(--caramel)]">hello@rubico.com</p>
                    <p className="text-sm text-[var(--caramel)]">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--espresso)]" />
                  </div>
                  <div>
                    <h3 className="text-[var(--espresso)] mb-1">Service Area</h3>
                    <p className="text-[var(--caramel)]">Nationwide Coverage</p>
                    <p className="text-sm text-[var(--caramel)]">Ask about your location</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[var(--espresso)]" />
                  </div>
                  <div>
                    <h3 className="text-[var(--espresso)] mb-1">WhatsApp</h3>
                    <a href="https://wa.me/15551234567" className="text-[var(--gold)] hover:underline">
                      +1 (555) 123-4567
                    </a>
                    <p className="text-sm text-[var(--caramel)]">Quick responses</p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--cream)] rounded-2xl p-6">
                <h3 className="text-xl text-[var(--espresso)] mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm text-[var(--caramel)]">
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span>Book at least 4 weeks in advance for best availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span>Peak wedding season fills up fast (May-October)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span>Corporate events can often be booked within 1-2 weeks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-[var(--cream)] rounded-2xl p-8">
                <h2 className="text-3xl text-[var(--espresso)] mb-2">Book Your Event</h2>
                <p className="text-[var(--caramel)] mb-8">
                  Fill out the form below and we'll get back to you with availability and pricing.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[var(--espresso)] mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--espresso)] mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
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
                        className="w-full px-4 py-3 bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--espresso)] mb-2">Event Type *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="private">Private Party</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[var(--espresso)] mb-2">Event Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--espresso)] mb-2">Guest Count</label>
                      <select
                        className="w-full px-4 py-3 bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      >
                        <option value="">Select approximate count</option>
                        <option value="1-25">1-25 guests</option>
                        <option value="26-50">26-50 guests</option>
                        <option value="51-100">51-100 guests</option>
                        <option value="101-150">101-150 guests</option>
                        <option value="150+">150+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--espresso)] mb-2">Event Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="City, State or Full Address"
                      className="w-full px-4 py-3 bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--espresso)] mb-2">Additional Details</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your event, any special requests, or questions you have..."
                      className="w-full px-4 py-3 bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[var(--espresso)] text-[var(--cream)] rounded-full text-lg hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all shadow-lg"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--espresso)] mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl text-[var(--espresso)] mb-3">How far in advance should I book?</h3>
              <p className="text-[var(--caramel)]">
                We recommend booking 4-6 weeks in advance for weddings and 2-3 weeks for corporate events. However, we can often accommodate last-minute requests depending on availability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl text-[var(--espresso)] mb-3">What's included in the service?</h3>
              <p className="text-[var(--caramel)]">
                All packages include professional baristas, premium coffee beans, all equipment, setup and breakdown, and serving supplies. Custom options like branded cups and cart decoration are available.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl text-[var(--espresso)] mb-3">Do you travel outside your main service area?</h3>
              <p className="text-[var(--caramel)]">
                Yes! We can travel for events. Travel fees may apply for locations outside our standard service area. Contact us with your location for details.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl text-[var(--espresso)] mb-3">What if it rains at my outdoor event?</h3>
              <p className="text-[var(--caramel)]">
                Our carts can operate in light rain with coverage. For heavy weather, we recommend having a covered backup location. We'll work with you to ensure your event goes smoothly regardless of weather.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
