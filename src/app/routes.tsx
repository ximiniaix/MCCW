import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import CorporateEvents from "./pages/CorporateEvents";
import Weddings from "./pages/Weddings";
import Franchises from "./pages/Franchises";
import Setups from "./pages/Setups";
import FlairEspresso from "./pages/FlairEspresso";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "events/corporate", Component: CorporateEvents },
      { path: "events/weddings", Component: Weddings },
      { path: "franchises", Component: Franchises },
      { path: "setups", Component: Setups },
      { path: "flair-espresso", Component: FlairEspresso },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
