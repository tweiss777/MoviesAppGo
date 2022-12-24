import React, { createContext, useEffect, useState } from "react";

//Authentication context interface
interface IAuthenticationContext {
 login: Function,
 logout: Function,
 isAdmin: boolean
 isAuthenticated: boolean 
 isAuthenticating: boolean
}




//Authentication context default values
const AuthenticationContextDefaultValues: IAuthenticationContext = {
  login: () =>  console.log("logging in"),
  logout: () => console.log("logging out"),
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false)  
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  
  // useEffect()


  // use this to handle login
  const login: Function = (userName: string, password: string) => {
    console.log("loggging user in")
    setTimeout(() => console.log(`user ${userName} logged in succesfully`),3000)
    console.log(`username ${userName}`)
    console.log(`password ${password}`)
    
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
