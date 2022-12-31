import useAuthentication from "../hooks/useAuthentication";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
// protected route


interface IProps {
  children: JSX.Element | JSX.Element[];
}
export default function ProtectedRoute({ children }: IProps) {
  const { setIsAuthenticated, isAuthenticated } = useAuthentication()
  const [ cookies ] = useCookies(['token'])
  const location = useLocation()
  useEffect(() => {
    if(cookies)
    console.log(location)
    console.log(history)
    console.log(`is authenticated = ${isAuthenticated}`)
  })
  
  return isAuthenticated? <> { children } </> : <Navigate to="/login" />
}``