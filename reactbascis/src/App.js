import {React,useState} from 'react';
import Header from "./Header"
import { Contactus } from './Contactus';
import Footer from './Footer';
import './App.css';

function App() {
  // use state 
  // let (stateVariable ,state function )=state(default /initial state)
  // let [name,setName]=useState("Vired")
  // const [num,setNum]=useState(0)
  // function handleNumInc(){
  //   setNum(num+1)
  // }
  // function handleNumDec(){
  //   setNum(num-1)
  // }
  // function handleClick(){
  //   console.log("I am clicked");
  //   // in order to change the state , we will use state fn
  //   setName("hero")
  // }
  // responsible for storing the state of the component
  // how to store = statefn responsible for manupulationg and changing state variable
 
 
  // const contactdetial={
  //   name:"Chandan",
  //   phone:"11111111",
  //   email:"email@gmail.com"
  // }
  // let courseName="Hero vired"
  // let num="20"
  // // how to pass multiple props
  // let obj={
  //   name:"hello",
  //   age:"19",
  //   copyright:"@hello"
  //   // name and age in header and copyright in footer
  // }
  const [name,setName]=useState("hero")
  const [showTitlePage,setShowTitlePage]=useState(true)
  return (
    <>
    {/* <Contactus name={contactdetial.name} phone={contactdetial.phone} email={contactdetial.email}/>
    <Header name={obj.name} age={obj.age}/>
    
    <Footer copyright={obj.copyright}/> */}
    {/* <div>
      My Organisation name is {name}
      <button onClick={handleClick}>Change the name </button>
      <br/>
      <button onClick={handleNumInc}>Increment  </button>
      <h1>Number is : {num}</h1>
      <button onClick={handleNumDec}> Decrement</button>
      </div> */}
      <Header name={name} setName={setName} showTitlePage={showTitlePage} setShowTitlePage={setShowTitlePage}/>
      <Footer name={name}/>
    </>
  );
}

export default App;
