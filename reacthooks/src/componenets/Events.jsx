import React from 'react'

function Events() {
    function handleInput(e){
        console.log(e.target.value)
    }
  return (
    <input onChange={handleInput}/>
  )
}

export default Events


// reason why we dont call function inside jsx

// const heros=["iron man ","superman"]
// function excalim(str){
//     return str +"!"
// }
// const output =heros.map(excalim)