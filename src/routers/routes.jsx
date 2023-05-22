import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRouter from "./config/PrivateRouter";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PublicRoutes />} />

        <Route
          path="/app/*"
          element={
            <PrivateRouter>
              <PrivateRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default Rutas;
