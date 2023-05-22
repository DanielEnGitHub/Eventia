import { Routes, Route } from "react-router-dom";

const PrivateRoutes = () => {
  /* RUTAS PRIVADAS */
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        {/* ----Dasboard---- */}
        <Route end path="/" element={<h1>INICIO</h1>} />

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
