import React, { useContext } from 'react'
import User from "../context/UserContext"
import Description from './Description'
import {userContext} from "react"

const Name = () => {
    const {User}= useContext(User)
  return (
    <>
    Name.js :{User}<br></br>
    <Description/>
    </>
  )
}

export default Name