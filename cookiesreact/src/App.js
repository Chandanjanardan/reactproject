import React from "react";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import { useCookies } from "react-cookie";
import Samletes from "./components/Samletes";
import Product from "./components/Product";
import LandingPage from "./components/LandingPage";
import ViewProductInfo from "./components/ViewProductInfo";

function App() {
  const [cookie,setCookie]=useCookies("")
  return (
    <Router>
      <h2>Hi wlc to learning </h2>
      <Routes>
      <Route path="/" element={<Samletes setCookie={setCookie} cookie={cookie}/>}/>
      <Route path="/pro/:id" element={<ViewProductInfo/>}/>
      <Route path="/product" element={<LandingPage/>}/>

      </Routes>
    </Router>

    
   
   
  );
}

export default App;
