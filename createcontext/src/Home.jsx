import React ,{useContext} from 'react'
import { AuthContext } from './App'


function Home() {
    let authContext= useContext(AuthContext)
    
    console.log(authContext)
  return (
    <>
    <div><h1>Name of the user is:{authContext.username}</h1></div>
    <p>{JSON.stringify(authContext,null,2)}</p>
    </>
  )
}

export default Home