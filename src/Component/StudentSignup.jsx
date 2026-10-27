import React,{useState} from 'react'
import axios from 'axios'

const StudentSignup = () => {

  let [student,setStudent] = useState({
    name:"",
    joinedMonth:"",
    course:""
  })

  function handleChange(e){
    let{name, value} = e.target
    setStudent({...student,[name]:value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    let response = await axios.post("https://6ac0d2e6309c92da039c1d46.mockapi.io/dashboard", student)
    console.log(response.data)
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Student Signup Form</legend>
          <input type="text" name="name" value={student.name} onChange={handleChange} id="" placeholder="enter the name"/><br />
          <label htmlFor="">Joining Month: </label>
          <input type="month" name="joinedMonth" value={student.joinedMonth} onChange={handleChange} id="" placeholder="Enter the Month:"/><br />
          <label htmlFor="">Select Course: </label>
          <select name="" id="" onChange={handleChange}>
            <option value="java">java</option>
            <option value="python">python</option>
            <option value="testing">testing</option>
            <option value="mern">mern</option>
          </select>
          <br /><button disabled={student.name && student.joinedMonth && student.course? false : true}>submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default StudentSignup




