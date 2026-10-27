import React from 'react'
import { createContext, useState } from 'react'

export let myContext = createContext()

const Context = (props) => {

  let[token,setToken] = useState(null)

  return (
    <div>
      <myContext.Provider value={{token,setToken}}>
      {props.children}
      </myContext.Provider>
    </div>
  )
}

export default Context
