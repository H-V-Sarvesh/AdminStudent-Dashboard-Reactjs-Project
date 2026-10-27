import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StudentSignup from './Component/StudentSignup'
import StudentLogin from './Component/StudentLogin'
import AdminLogin from './Component/AdminLogin'
import NavBar from './Component/NavBar'
import Context from './Component/Context'
import Dashboard from './Component/Dashboard'
import AllUsers from './Component/AllUsers'
import Performance from './Component/Performance'



let myRouter = createBrowserRouter([{
  path:"/",
  element:<NavBar></NavBar>,
  children:[{
    index:true,
    element:<StudentLogin></StudentLogin>
  },{
    path:"studentsignup",
    element:<StudentSignup></StudentSignup>
  },{
    path:"adminlogin",
    element:<AdminLogin></AdminLogin>
  }]
},{
  path:"/dashboard",
  element:<Dashboard></Dashboard>,
  children:[{
    index:true,
    element:<AllUsers></AllUsers>
  },{
    path:"performance",
    element:<Performance></Performance>
  }]
  }
])
const App = () => {
  return (
    <div>
      <Context>
      <RouterProvider router={myRouter}></RouterProvider>
      </Context>
    </div>
  )
}

export default App





