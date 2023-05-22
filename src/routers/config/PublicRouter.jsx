import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";

// Children es una prop que simpre esta, los hijos de este componente
const PublicRouter = ({ children }) => {
  const user = useSelector(selectUser);

  // Si no esta autenticado, retorna el children (componente hijo)
  return !user ? children : <Navigate to="/app" />;
};

export default PublicRouter;
