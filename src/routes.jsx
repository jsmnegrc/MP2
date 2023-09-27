import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Community from "./pages/Community/Community";
import Contact from "./pages/Contact/Contact";
import Property from "./pages/Properties/Property";


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
    path: "/community",
    element: <Community />,
  },
  {
    path: "/properties",
    element: <Property />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
