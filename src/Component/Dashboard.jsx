import React, { useContext } from 'react'
import { myContext } from './Context'
import {Link, Outlet} from 'react-router-dom'

const Dashboard = () => {
  let {token} = useContext(myContext)

  if(!token){
    return <h1><Link to={"/adminlogin"}>Login First</Link></h1>
  }
  
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={"/dashboard"}>Dashboard</Link></li>
          <li><Link to={"performance"}>Performance</Link></li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default Dashboard
