import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Property from "./pages/Properties/Property";
import Community from "./pages/Community/Community";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Properties from "./pages/Community/CommunitytItem";


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
    element: <Properties />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
