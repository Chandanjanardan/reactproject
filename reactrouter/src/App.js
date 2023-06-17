import { Routes,Route } from 'react-router-dom';
import Contact from './Contact';
import Signup from './signup';
import Signin from './signin'
import LandingPage from './LandingPage';
import Header from './Header';
import Profile from './profile/Profile';


function App() {
  return (
    <div className="App">
    {/* <h1>This is app.js</h1> */}
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/landingpage' element={<LandingPage/>}/>
      <Route path='/header' element={<Header/>}/>
      {/* <Route path='/profile' element={<Profile/>}/> */}
    </Routes>
    
    </div>
  );
}

export default App;
