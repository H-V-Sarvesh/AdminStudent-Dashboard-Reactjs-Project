import React from 'react'
import { BarChart, XAxis, YAxis, Legend, Tooltip } from 'recharts'

const StudentSignup = () => {
  return (
    <div>
      <form action="">
        <fieldset>
          <legend>Student Signup Form</legend>
          <label htmlFor="">Email: </label>
          <input type="email" name="" id="" placeholder="Enter the Email ID:"/><br />
          <label htmlFor="">Password: </label>
          <input type="password" name="" id="" placeholder="Enter the Password:"/>
        </fieldset>
      </form>
    </div>
  )
}

export default StudentSignup
