import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Community from "./pages/Community/Community"
import News from "./pages/News/News"
import Contact from "./pages/Contact/Contact"
import Pricing from "./pages/Pricing/Pricing"

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
        path: "/news",
        element: <News />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/pricing",
        element: <Pricing />,
    },
                                           
]

export default routes;