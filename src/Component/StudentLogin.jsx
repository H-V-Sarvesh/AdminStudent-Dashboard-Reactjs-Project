import React from 'react'

const StudentLogin = () => {
  return (
    <div>
      <form action="">
        <fieldset>
          <legend>Student Login Form</legend>
          <label htmlFor="">userName: </label>
          <input type="text" name="username" id="" placeholder="Enter the userName"/><br />
          <label htmlFor="">Password: </label>
          <input type="password" name="password" id="" placeholder="Enter the Password"/>
        </fieldset>
      </form>
    </div>
  )
}

export default StudentLogin