import React from 'react'
import Title from './subcomponent/Title'

function Header({name,setName}) {
  function handleName(){
    setName("herovired")
  }
  return (
    <div>
       {/* <h1> My name is {name}
        Age  is {age}
        </h1> */}
        <h1>Name is :{name}</h1>
        <button onClick={handleName}>Click me</button>
        

    </div>
  )
}

export default Header