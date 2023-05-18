import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Components from "../pages/public/Components";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
