import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Property from "./pages/Properties/Property";
<<<<<<< HEAD
=======
import Community from "./pages/Community/Community";
>>>>>>> a4441752b5c945e83e316ce320b750329a6bf576
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
