import React from "react";
import { Routes, Route } from "react-router-dom";
import Components from "../pages/public/Components";
import Login from "../pages/public/Login";

const PublicRoutes = () => {
  /* RUTAS PRIVADAS */
  return (
    <>
      <Routes>
        {/* ----Dasboard---- */}
        <Route end path="/" element={<Login />} />
        <Route end path="/components" element={<Components />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
