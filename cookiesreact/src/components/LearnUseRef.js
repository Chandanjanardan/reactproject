import React,{useRef, useState} from 'react'

const LearnUseRef = () => {
    const inputref = useRef(null)
    const [name,setName]=useState("")
    console.log(inputref.value)
    function handleClick(){
        console.log(inputref.current.value)
        console.log(name,"onchange and state")
    }
    function handleChange(e){
    setName(e.target.value)}
  return (
    <div>
    <input type="text" placeholder="enter your name"  ref={inputref}/>
    <input type="text" placeholder="using on change and state"  onChange={handleChange}/>

    <button onClick={handleClick}>Click me </button>

    </div>
  )
}

export default LearnUseRef