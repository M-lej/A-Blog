import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";

const PrivateRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
