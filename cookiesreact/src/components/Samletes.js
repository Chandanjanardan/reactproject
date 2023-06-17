import React from 'react'

const Samletes = ({setCookie,cookie}) => {
    function handleChange(e){
        console.log(e.target.value);
        setCookie("name",e.target.value,{path:"/"})
    }
  return (
    <div>THis is my compo :{cookie.name}<br/>
    <input type="text" placeholder="enter your name"  onChange={handleChange}/>
    </div>
  )
}

export default Samletes