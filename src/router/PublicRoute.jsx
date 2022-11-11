import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  console.log( 'public route',logged);
  return logged ? <Navigate to="/marvel" /> : children;
};
