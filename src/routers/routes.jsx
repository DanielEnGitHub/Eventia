import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Components from "../pages/public/Components/";
import Login from "../pages/public/Login/Login";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/components" element={<Components />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
