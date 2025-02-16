import { Navigate, Outlet } from "react-router-dom";
import { userStore } from "../store/userStore";

const ProtectedRoute = () => {
  const { isAuthenticated } = userStore();

  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
