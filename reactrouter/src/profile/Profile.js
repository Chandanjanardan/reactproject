import React, { useState ,useMemo} from 'react'
import Name from './Name'


const Profile = () => {
    const [user,setUser]=useState("Chandy")
    const [age,setAge] = useState(27)
    const value=useMemo(
        ()=>({user,setUser,age,setAge})
    )
  return (
    // BOundary value and component 
    <>
    <user.Provider value={value}>
        Profile.js:{user}  | {age} <br></br>
        <Name/>
    </user.Provider>
    </>
  )
}

export default Profile

