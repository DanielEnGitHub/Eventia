import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const user = false;

  // Si esta autenticado, retorna el children (componente hijo)
  return user ? children : <Navigate to="/" />;
};

export default PrivateRouter;
