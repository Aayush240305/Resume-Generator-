import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './Hero Section/Hero.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import Resume from './Resume/Resume.jsx'
import { ToastContainer} from 'react-toastify';

const router = createBrowserRouter(
  [
    {
      path:"/home",
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
      path:"/",
      element: <Dashboard />,
    },
    {
      path:"/resume/:slug",
      element:<Resume />,
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
