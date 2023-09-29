import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HomeAndRentBody from "./pages/Home/HomeAndRent/HomeAndRentBody";
import Contact from "./pages/Contact/Contact";
import Property from "./pages/Properties/Property";
import RentList from "./components/RentList";
import Propertydetails from "./pages/Propertydetails/Propertydetails";
<<<<<<< HEAD

=======
>>>>>>> 4b9fc936a435255b74e244bf2317bc7b339f2850

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
<<<<<<< HEAD
=======
    path: "/homeandrent",
    element: <HomeAndRentBody />,
  },
  {
>>>>>>> 4b9fc936a435255b74e244bf2317bc7b339f2850
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
  {
    path: "/hero",
    element: <RentList />,
  },
];

export default routes;
