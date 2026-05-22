import { Link } from "react-router";
import { Coffee, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--cream)] px-4">
      <div className="text-center max-w-2xl">
        <div className="w-32 h-32 bg-[var(--espresso)] rounded-full flex items-center justify-center mx-auto mb-8">
          <Coffee className="w-16 h-16 text-[var(--gold)]" />
        </div>
        <h1 className="text-6xl text-[var(--espresso)] mb-4">404</h1>
        <h2 className="text-3xl text-[var(--espresso)] mb-6">Oops! Page Not Found</h2>
        <p className="text-xl text-[var(--caramel)] mb-8">
          Looks like this page took an espresso break. Let's get you back to where the coffee's brewing.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--espresso)] text-[var(--cream)] rounded-full text-lg hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all shadow-lg"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
