import React,{useState} from 'react'

const StudentSignup = () => {

  let [student,setStudent] = useState({
    name:"",
    joinedMonth:"",
    course:""
  })

  function handleChange(e){
    let[name, value] = e.target
    setStudent({...student,[name]:value})
  }

  return (
    <div>
      <form action="">
        <fieldset>
          <legend>Student Signup Form</legend>
          <input type="text" name="name" value={student.name} onChange={handleChange} id="" placeholder="enter the name"/>
          <label htmlFor="">Joining Month </label>
          <input type="month" name="joinedMonth" value={student.joinedMonth} onChange={handleChange} id="" placeholder="Enter the Month:"/><br />
          <label htmlFor="">Select Course: </label>
          <select name="" id="" onChange={handleChange}>
            <option value="java"></option>
            <option value="python"></option>
            <option value="testing"></option>
            <option value="mern"></option>
          </select>
          <button disabled={student.name && student.joinedMonth && student.course? false : true}>submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default StudentSignup
