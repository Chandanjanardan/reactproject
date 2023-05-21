import React from 'react';
import { Contactus } from './Contactus';
import './App.css';

function App() {
  const contactdetial={
    name:"Chandan",
    phone:"11111111",
    email:"email@gmail.com"
  }
  return (
    <>
    <Contactus name={contactdetial.name} phone={contactdetial.phone} email={contactdetial.email}/>
    </>
  );
}

export default App;
