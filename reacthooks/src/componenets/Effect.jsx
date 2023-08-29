import React, { useEffect ,useState} from 'react'

function Effect() {
  const [counter,setCounter]=useState(0)
  const [counter2,setCounter2]=useState(20)
  // if enpty run only on mount and console.log rerender every time 
  // with dependecy it will run only one time
  // useEffect(()=>{
  //   console.log("mounted")
  //   return()=>console.log("un-mounted")
  // },[])//every time counter change render use effect
  // console.log("Hi outside")
  useEffect(()=>{
    console.log("rerendring")
    return(()=>console.log("re-render cleanup"))
  })
  return(
    <>
    <h1>App</h1>
    <p>{counter}</p>
    <p>{counter2}</p>
    <button onClick={()=>setCounter(counter+1)}>Go up</button>
    <button onClick={()=>setCounter2(counter2+1)}>Go up</button>
    </>
  )
}

export default Effect