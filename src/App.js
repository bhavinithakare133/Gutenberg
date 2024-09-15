import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Bookinfo from "./components/Bookinfo.js";
import Firstpage from './components/Firstpage.js';
import Searchpage from "./components/Searchpage.js";

function App() {
  return (
    <div >
              <Firstpage/>  

            <Searchpage/>

       <Bookinfo/> 
      
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/searchpage">Searchpage</Link></li>
              <li><Link to="/bookinfo">Bookinfo</Link></li>
            </ul>
          </nav> */}
          <Routes>
             {/* <Route path="/" element={<Firstpage />} />  */}
            <Route path="/searchpage" element={<Searchpage />} />
             <Route path="/bookinfo" element={<Bookinfo />} /> 
            {/* <Route path="/userinfo/:username" element={<UserInfo />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
