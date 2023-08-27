
import { createContext } from 'react';
import './App.css';
import Home from './Home';

const AuthContext= createContext()
const userAuth= {username:"Chandy",id:23}

function App() {
  return (
    <div className="App">
      <AuthContext.Provider value={userAuth}>

    <Home/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
export {AuthContext}
