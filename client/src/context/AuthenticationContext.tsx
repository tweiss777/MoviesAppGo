import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

//Authentication context interface
interface IAuthenticationContext {
 login: Function,
 logout: Function,
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
  const [cookies, setCookie, removeCookie] = useCookies(['authenticated'])
  const navigate = useNavigate()


  useEffect(() => {
    console.log('checking if user is authenticated...')
    if(cookies['authenticated']){
      console.log('redirecting to dashboard')
    } else {
      navigate('/login')
    }
  })


  // use this to handle login
  const login: Function = (userName: string, password: string) => {
    console.log("loggging user in")
    const user = users.find(user => user.username === userName.toLowerCase() && user.password === password.toLowerCase())
    if(user){
      setCookie('authenticated', 'true')
    } else {

    }
    
  }


   const logout: Function = () => {
    console.log("logging use out")
  }
  const contextData: IAuthenticationContext = {
    login,
    logout,
    isAuthenticated,
    isAuthenticating,
    isAdmin
  }     

  return(
    <AuthenticationContext.Provider value={contextData}>
      {/* pass the children component here */}
      {children}
    </AuthenticationContext.Provider>
  )

}
