import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Property from "./pages/Properties/Property";
import RentList from "./components/RentList";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/properties",
    element: <Property />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/search",
    element: <RentList />,
  },
];

export default routes;
