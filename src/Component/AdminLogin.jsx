import React,{useContext, useState} from 'react'
import { myContext } from './Context'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

  let {token, setToken} = useContext(myContext)
  console.log(token)
  let navigate = useNavigate()

  

  let[admin, setAdmin] = useState({
    username:"",
    password:""
  })

  function handleChange(e){
    let {name,value} = e.target
    setAdmin({...admin,[name]:value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    let response = await fetch("https://dummyjson.com/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(admin),
      // credentials:true
    })

    if(response.status==200){
      let data = await response.json()

      setToken(data.accessToken)
      navigate("/dashboard")
    }

    // let data = await response.json()
    // console.log(data)
  }

  console.log(admin)

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Admin Login Page</legend>
          <label htmlFor="">userName: </label>
          <input onChange={handleChange} value={admin.username}  type="text" name="username" id="" placeholder="Enter the userName"/><br /><br />
          <label htmlFor="">Password: </label>
          <input onChange={handleChange} value={admin.password}  type="password" name="password" id="" placeholder="Enter the Password"/><br />
          <button disabled={admin.username && admin.password ? false:true}>Login</button>
        </fieldset>
      </form>
    </div>
  )
}

export default AdminLogin
