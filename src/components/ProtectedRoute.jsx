import { useSelector } from "react-redux"
import { selectAuthIsLoggedIn } from "../redux/auth/authSelectors"
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};


