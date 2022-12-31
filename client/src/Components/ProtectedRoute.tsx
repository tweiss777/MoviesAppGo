import useAuthentication from "../hooks/useAuthentication";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
// protected route


interface IProps {
  children: JSX.Element | JSX.Element[];
}
export default function ProtectedRoute({ children }: IProps) {
  const { isAuthenticated } = useAuthentication()
  
  return isAuthenticated? <> { children } </> : <Navigate to="/login" />
}``