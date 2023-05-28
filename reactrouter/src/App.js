import { Routes,Route } from 'react-router-dom';
import Contact from './Contact';
import Signup from './signup';
import Signin from './signin'


function App() {
  return (
    <div className="App">
    {/* <h1>This is app.js</h1> */}
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;