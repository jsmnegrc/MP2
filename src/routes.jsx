import Home from "./pages/Home/Home";
import About from "./pages/About/About";
<<<<<<< HEAD
import Contact from "./pages/Contact/Contact";
import Property from "./pages/Properties/Property";
import RentList from "./components/RentList";
=======
import Property from "./pages/Properties/Property";
import Contact from "./pages/Contact/Contact";
import Propertydetails from "./pages/Propertydetails/Propertydetails";
>>>>>>> 58fa522a76f72767f5a2269e176570cd09d803eb

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
<<<<<<< HEAD
=======
    path: "/propertydetails/:externalID",
    element: <Propertydetails />,
  },
  {
>>>>>>> 58fa522a76f72767f5a2269e176570cd09d803eb
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/search",
    element: <RentList />,
  },
];

export default routes;
