import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HomeAndRentBody from "./pages/Home/HomeAndRent/HomeAndRentBody";
import Contact from "./pages/Contact/Contact";
import Property from "./pages/Properties/Property";
import Propertydetails from "./pages/Propertydetails/Propertydetails";

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
    path: "/about",
    element: <About />,
  },
  {
    path: "/homeandrent",
    element: <HomeAndRentBody />,
  },
  {
    path: "/property",
    element: <Property />,
  },
  {
    path: "/propertydetails/:externalID",
    element: <Propertydetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
