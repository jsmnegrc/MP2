import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import routes from "./routes";

const App = () => {
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
    </>
  );
};

export default App;
