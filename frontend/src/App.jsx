import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import EatInFormPage from './Pages/EatInFormPage'
import EatInResultPage from './Pages/EatInResultPage'
import EatOutFormPage from './Pages/EatOutFormPage'
import EatOutResults from './Pages/EatOutResults'




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/eat-in-form',
      element: <EatInFormPage/>,
      
    },
    {
      path: '/inResults',
      element: <EatInResultPage/>
    },
    {
      path: '/eat-out-form',
      element: <EatOutFormPage/>,
    },
    {
        path: '/outResults',
        element: <EatOutResults/>
    }
  ])

  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
