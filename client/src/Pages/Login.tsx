import React, { useState } from "react";
import useAuthentication from '../hooks/useAuthentication'
import '../scss/Login.scss'


export default function Login(){
  // username and password states;
  const [userName,setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')  
  const { login, isAuthenticating} = useAuthentication() 
  
  // function to log the user in
  function loginUser(event: any){
    login(userName,password)
    event.preventDefault()
  }

  return(   
      <div className="login-page">
      {/* takes the user back to the main page */}
        <div className='login-container'>
          <form onSubmit={loginUser} method="post" > 
            <label>Username</label>
            <input value={userName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)} type="text" name="username" />
            
            <label>Password</label>
            <input value={password}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} type="password" name="password" />
            <input type="submit" value="Login" />            

          </form>
        </div>
      </div>
  ) 

}