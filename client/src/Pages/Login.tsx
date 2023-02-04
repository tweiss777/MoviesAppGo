import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import useAuthentication from '../hooks/useAuthentication'
import '../scss/Login.scss'
import CustomSpinner from "../Components/CustomSpinner/CustomSpinner";


export default function Login() {

  // username and password states;
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [cookie] = useCookies(['token'])
  const { login, isAuthenticating } = useAuthentication()
  useEffect(() => {
    if (cookie.token) {
      history.back()
    }
  })

  // function to log the user in
  function loginUser(event: any) {
    login(userName, password)
    event.preventDefault()
  }

  return (
    <div className="login-page">
      {/* takes the user back to the main page */}
      <div className='login-container'>
        <form onSubmit={loginUser} method="post" >
          <div className="form-item">
            <label>Username</label>
            <input value={userName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)} type="text" name="username" />

          </div>

          <div className="form-item">
            <label>Password</label>
            <input value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} type="password" name="password" />
          </div>
          <hr />
          <div className="form-item">
            <input type="submit" value="Login" />
          </div>
          <div className="login-message">
            <CustomSpinner /><span style={{ position: 'relative', bottom: '0.5rem', left: '0.5rem' }}>Loggin in</span>
          </div>


        </form>
      </div>
    </div>
  )

}