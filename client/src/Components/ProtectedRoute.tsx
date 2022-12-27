import useAuthentication from "../hooks/useAuthentication";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
// protected route


interface IProps {
  children: JSX.Element | JSX.Element[];
}
export default function ProtectedRoute({ children }: IProps) {
  const { isAuthenticated } = useAuthentication()
  const location = useLocation()
  useEffect(() => {
    console.log(location)
  })
  return isAuthenticated? <> { children } </> : <Navigate to="/login" replace state={{ from: location }} />
}