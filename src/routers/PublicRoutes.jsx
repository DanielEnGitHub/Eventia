import React from "react";
import { Routes, Route } from "react-router-dom";
import Components from "../pages/public/Components";

const PublicRoutes = () => {
  /* RUTAS PRIVADAS */
  return (
    <>
      <Routes>
        {/* ----Dasboard---- */}
        <Route end path="/" element={<h1>Login</h1>} />
        <Route end path="/components" element={<Components />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
