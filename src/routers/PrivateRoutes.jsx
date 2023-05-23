import { Routes, Route } from "react-router-dom";
import Title from "../components/Texts/Title/Title";
import Main from "../pages/private/Main";

const PrivateRoutes = () => {
  /* RUTAS PRIVADAS */
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        {/* ----Dasboard---- */}
        <Route
          end
          path="/"
          element={
            <Main>
              <Title content="EVENTIA" />
            </Main>
          }
        />

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
