import React,{useRef,useEffect} from 'react'

function Ref() {
    // const ref=useRef(0)
    // console.log(ref)
    // function handleClick(){
    //     ref.current++
    //     console.log(ref)
    // }
    // useEffect(()=>{
    //     console.log("ref cahnged",ref)
    // })

    const ref=useRef(null)
    useEffect(()=>{
        console.log(ref)
    })
  return (
    <>
    {/* <div>Ref</div>
    <button onClick={handleClick}>Click me harder!</button> */}
    <h1 ref={ref}></h1>
    </>
  )
}

export default Ref