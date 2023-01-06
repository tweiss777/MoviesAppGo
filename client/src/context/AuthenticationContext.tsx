import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";

//Authentication context interface
interface IAuthenticationContext {
 login: Function,
 logout: Function,
 setIsAuthenticated: Function,
 isAdmin: boolean
 authErrors: boolean
 isAuthenticated: boolean 
 isAuthenticating: boolean
}

const users: any []= [
  { username: "admin", password: "abc123"}
];


//Authentication context default values
const AuthenticationContextDefaultValues: IAuthenticationContext = {
  login: () =>  console.log("logging in"),
  logout: () => console.log("logging out"),
  setIsAuthenticated: () => console.log("set is authenticating"),

  authErrors: false,
  isAuthenticated: false,
  isAuthenticating: false,
  isAdmin: false
}

// create the context here and export it everywhere
export const AuthenticationContext = createContext<IAuthenticationContext>(AuthenticationContextDefaultValues)


// props interface to pass into component
interface IProps{
  children: JSX.Element | JSX.Element[]
}

export default function AuthenticationProvider({children}: IProps){
  
  // authentication states
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false)  
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [authErrors, setAuthErrors] = useState<boolean>(false)
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const location = useLocation()
  const navigate = useNavigate()
  

  useEffect(() => {
    
    if(cookies['token'] === 'true'){
        const prevLocation = location.pathname
        setIsAuthenticated(true)
        // console.log('Authenticated')
        
        navigate(prevLocation)
    } else {
      // console.log('Not Authenticated')
      navigate('/login')
    }
  },[isAuthenticated])


  // use this to handle login
  const login: Function = (userName: string, password: string) => {
    setAuthErrors(false)
    console.log("loggging user in")
    const user = users.find(user => user.username === userName.toLowerCase() && user.password === password.toLowerCase())
    if(user){
      setCookie('token', 'true')
      setIsAuthenticated(true)
      navigate('/dashboard')
    } else {
      setAuthErrors(true)
    }
    
  }


   const logout: Function = () => {
    console.log("logging use out")
    removeCookie('token')
    setIsAuthenticated(!isAuthenticated)
  }
  const contextData: IAuthenticationContext = {
    login,
    logout,
    setIsAuthenticated,
    isAuthenticated,
    isAuthenticating,
    isAdmin,
    authErrors,
  }     

  return(
    <AuthenticationContext.Provider value={contextData}>
      {/* pass the children component here */}
      {children}
    </AuthenticationContext.Provider>
  )

}
