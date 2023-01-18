import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import List from "./List/List";
import Navbar from "./Navbar/Navbar";


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
        
          <Route path='/list' element={<List />} />
       </Routes>
    </div>
  );
}

export default App;
