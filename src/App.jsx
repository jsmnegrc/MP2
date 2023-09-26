import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import routes from "./routes";

const App = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact
              />
            );
          })}
        </Routes>
        <Outlet />
      </main>
      <Footer />
      {window.scrollY > 100 && ( 
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          Scroll to Top
        </button>
      )}
    </>
  );
};

export default App;
