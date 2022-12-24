import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login'



// router for app
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  }
  // add routes to dashboard here

])