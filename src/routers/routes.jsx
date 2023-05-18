import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/components" element={<h1>COMPONENTS</h1>} />
      </Routes>
    </Router>
  );
};

export default Rutas;