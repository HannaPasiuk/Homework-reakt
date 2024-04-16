import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth.context";



export const PrivateRoute = () => {
  const {auth} = useContext(AuthContext);
  const location = useLocation();

  return auth ? (
    <Outlet />)
    : (
      <Navigate to="/registration" state={{ from: location }} replace />
    );
};
