import useAuthentication from "../hooks/useAuthentication";
import { Navigate, useLocation } from "react-router-dom";
// protected route


interface IProps {
  children: JSX.Element | JSX.Element[];
}
export default function ProtectedRoute({ children }: IProps) {
  const { isAuthenticated } = useAuthentication()
  const location = useLocation()
  return isAuthenticated? <> { children } </> : <Navigate to="/login" replace state={{ from: location }} />
}