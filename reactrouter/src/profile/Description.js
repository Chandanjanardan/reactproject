import {userContext} from 'react'
import User from '../context/UserContext'

const Description = () => {
  const {user,setUser,age,setAge}=userContext(User)
  return (
    <>
    Description.js {user} |{age}
    <br></br>
    <button onClick={() =>setAge(21)}>Change Age</button><br></br>
      <button onClick={()=>setUser("Hello")}>Change age</button>
    </>
  
  )
}

export default Description