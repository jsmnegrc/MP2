import Home from "./pages/Home/Home";
import About from "./pages/About/About";
<<<<<<< HEAD
import Pricing from "./pages/Pricing/Pricing";
=======
import Property from "./pages/Properties/Property";
import Community from "./pages/Community/Community";
>>>>>>> 235653c44d6fbb59325789172fc68c091d9293d2
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Community from "./pages/Community/Community";

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
