import React, { useState } from "react";
import { Link } from 'react-router-dom'


export default function Login(){
  const [userName,setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  // function to log the user in
  function loginUser(event: React.FormEvent<HTMLInputElement>){
    console.log('logging in user')
    // route user to dashboard
    console.log(`username: ${userName}`)
    console.log(`passowrd: ${password}`)
    event.preventDefault()
  }

  return(
    <>
    
      <div>
      {/* takes the user back to the main page */}
      <Link to={'..'}>
        Back
      </Link>
        <h1>Login Page</h1>
        <div>
          <form method="post">
            
            <label>Username</label>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)} type="text" name="username" />
            
            <label>Password</label>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} type="passwordtext" name="password" />

          </form>
        </div>
      </div>
    </>
  ) 

}