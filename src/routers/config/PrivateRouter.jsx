import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";

const PrivateRouter = ({ children }) => {
  const user = useSelector(selectUser);

  // Si esta autenticado, retorna el children (componente hijo)
  return user ? children : <Navigate to="/" />;
};

export default PrivateRouter;
