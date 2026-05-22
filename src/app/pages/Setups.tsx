import { useState } from "react";
import { Link } from "react-router";
import { Filter } from "lucide-react";

const setupsData = [
  { id: 1, category: "weddings", title: "Garden Wedding Reception", location: "Napa Valley, CA" },
  { id: 2, category: "corporate", title: "Tech Conference", location: "San Francisco, CA" },
  { id: 3, category: "events", title: "Birthday Celebration", location: "Los Angeles, CA" },
  { id: 4, category: "weddings", title: "Beach Wedding Ceremony", location: "San Diego, CA" },
  { id: 5, category: "commercial", title: "Restaurant Coffee Bar", location: "Austin, TX" },
  { id: 6, category: "corporate", title: "Product Launch Event", location: "Seattle, WA" },
  { id: 7, category: "events", title: "Farmers Market Pop-Up", location: "Portland, OR" },
  { id: 8, category: "weddings", title: "Rustic Barn Wedding", location: "Nashville, TN" },
  { id: 9, category: "commercial", title: "Home Office Setup", location: "Denver, CO" },
  { id: 10, category: "corporate", title: "Team Building Event", location: "Boston, MA" },
  { id: 11, category: "events", title: "Art Gallery Opening", location: "New York, NY" },
  { id: 12, category: "weddings", title: "Rooftop Wedding", location: "Chicago, IL" },
];

const categories = [
  { id: "all", label: "All Setups" },
  { id: "weddings", label: "Weddings" },
  { id: "corporate", label: "Corporate" },
  { id: "events", label: "Events" },
  { id: "commercial", label: "Restaurant & Home" },
];

export default function Setups() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSetups = activeCategory === "all"
    ? setupsData
    : setupsData.filter((setup) => setup.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--espresso)] to-[var(--caramel)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl text-white mb-6">Our Setups Gallery</h1>
          <p className="text-xl text-[var(--cream)] max-w-2xl mx-auto">
            Browse our portfolio of beautiful coffee cart setups from events, weddings, and more.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-[var(--border)] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 text-[var(--caramel)] flex-shrink-0">
              <Filter className="w-5 h-5" />
              <span>Filter:</span>
            </div>
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-[var(--espresso)] text-[var(--cream)]"
                      : "bg-[var(--cream)] text-[var(--caramel)] hover:bg-[var(--gold)]/20"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSetups.map((setup) => (
              <div
                key={setup.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-[var(--caramel)] to-[var(--gold)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-2">
                      {categories.find((c) => c.id === setup.category)?.label}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[var(--espresso)] mb-2">{setup.title}</h3>
                  <p className="text-[var(--caramel)] mb-4">{setup.location}</p>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-2 bg-[var(--espresso)] text-[var(--cream)] rounded-full text-sm hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all"
                  >
                    Request Similar Setup
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--gold)] to-[var(--caramel)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[var(--espresso)] mb-6">Ready to Create Your Own Setup?</h2>
          <p className="text-xl text-[var(--espresso)]/80 mb-8">
            Let's bring the café experience to your next event.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[var(--espresso)] text-[var(--cream)] rounded-full text-lg hover:bg-white hover:text-[var(--espresso)] transition-all shadow-lg"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </div>
  );
}
