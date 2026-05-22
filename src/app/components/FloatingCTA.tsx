import { Link } from "react-router";
import { MessageCircle, Calendar } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <Link
        to="/contact"
        className="w-14 h-14 bg-[var(--espresso)] text-[var(--cream)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all group"
        aria-label="Book Now"
      >
        <Calendar className="w-6 h-6" />
      </Link>
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
