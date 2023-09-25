import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Property from "./pages/Properties/Property";
import Community from "./pages/Community/Community";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";


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
    path: "/property",
    element: <Property />,
  },
  {
    path: "/community",
    element: <Community />,
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
