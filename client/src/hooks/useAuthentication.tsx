import { useContext } from 'react'
import { AuthenticationContext } from "../context/AuthenticationContext";

const useAuthentication: Function = () => useContext(AuthenticationContext)

export default useAuthentication