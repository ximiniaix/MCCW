import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)]">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
