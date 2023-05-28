import React from 'react'
import Title from './subcomponent/Title'

function Header({name,setName,showTitlePage,setShowTitlePage}) {
  function handleName(){
    setName("herovired")
    setShowTitlePage(false)
  }
  return (
    <div>
       {/* <h1> My name is {name}
        Age  is {age}
        </h1> */}
        <h1>Name is :{name}</h1>
        <button onClick={handleName}>Click me</button>
        THis is title page:{showTitlePage ?<Title/>:null}
        

    </div>
  )
}

export default Header