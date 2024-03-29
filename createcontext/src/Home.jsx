import React ,{useContext} from 'react'
import { AuthContext } from './App'


function Home() {
    // This is the previous when we export only stateless
    // let authContext= useContext(AuthContext)
    // now taking states it should be in order of value in app.js
    const [userDetails,setUserDetails]=useContext(AuthContext)
    function add(){
        setUserDetails((prev)=>{
            return (
                {...prev,add:123}
            )
        })
        console.log(userDetails)
    }
    console.log(userDetails)
   function remove(){
    setUserDetails((prev)=>{
        return (
            {...prev,add:null}
        )
    })
   }
    
  return (
    <>
    <div><h1>Name of the user is:{userDetails.username}</h1></div>
    <div>

    {userDetails.add?<h1>added:{userDetails.add}</h1>:null}
    </div>
    <button onClick={add}>Add in context</button>
    <button onClick={remove}>Remove add</button>
    <p>{JSON.stringify(userDetails,null,2)}</p>
    </>
  )
}

export default Home