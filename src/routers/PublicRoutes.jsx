import { Routes, Route } from "react-router-dom";
import Components from "../pages/public/Components";
import Login from "../pages/public/Login/Login";
import PublicRouter from "./config/PublicRouter";

const PublicRoutes = () => {
  /* RUTAS PRIVADAS */
  return (
    <>
      <Routes>
        {/* ----Dasboard---- */}
        <Route
          end
          path="/"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />
        <Route end path="/components" element={<Components />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
