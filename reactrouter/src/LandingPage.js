import React, { useEffect } from 'react'

// use effect
// hook responsible for side effect like api calling

function LandingPage() {
    let a=10
    // console.log("i am redering in landing page componennt")

    useEffect(()=>{
        console.log("I am hello from useeffect")
        let body= document.querySelector(".header");
        console.log(body)
    },[])
    // console.log(" I am below useeffect")
  return (
    <div className='header'>LandingPage :{a}</div>
  )
}

export default LandingPage