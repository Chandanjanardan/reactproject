
import { createContext, useState } from 'react';
import './App.css';
import Home from './Home';

const AuthContext= createContext()
const userAuth= {username:"Chandy",id:23}

function App() {
  const[userDetail,setUserDetail]=useState(userAuth)
  return (
    <div className="App">
      {/* to pass mutile parameter in value use it as araay */}
      <AuthContext.Provider value={[userDetail,setUserDetail]}>

    <Home/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
export {AuthContext}
