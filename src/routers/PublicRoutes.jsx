import { Routes, Route } from "react-router-dom";
import Components from "../pages/public/Components";
import Login from "../pages/public/Login/Login";
import PublicRouter from "./config/PublicRouter";
import VerifyInvitation from "../pages/public/VerifyInvitation";
import ConfimrAssistance from "../pages/public/ConfimrAssistance";

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
        <Route
          end
          path="/verificar-invitacion"
          element={<VerifyInvitation />}
        />
        <Route
          end
          path="/confirmar-asistencia"
          element={<ConfimrAssistance />}
        />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
