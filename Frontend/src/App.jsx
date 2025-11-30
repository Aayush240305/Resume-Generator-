import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './Hero Section/Hero.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Dashboard from './Dashboard.jsx'
import { ToastContainer} from 'react-toastify';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Hero />,
    },
    {
      path:"/login",
      element: <Login />,
    },
    {
      path:"/signup",
      element: <Signup />,
    },
    {
      path:"/dashboard",
      element: <Dashboard />,
    }
    ]
  )

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer />
    <RouterProvider router={router} />
    </>
    )
}

export default App
