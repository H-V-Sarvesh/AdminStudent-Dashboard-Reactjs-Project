import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={"/"}>Student Login</Link></li>
          <li><Link to={"adminlogin"}>Admin Login</Link></li>
          <li><Link to={"studentsignup"}>Student Signup</Link></li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default NavBar
