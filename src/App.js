import './App.css';
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./home";
import Setup from "./setup";
import Comments from "./comments";
import Print from "./print";
import Variables from "./variables"
import Conditionals from "./conditionals"
function App() {
  return (
      <>
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path="/setup" element={<Setup />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
          <Route path="/print" element={<Print />}></Route>
          <Route path="/variables" element={<Variables />}></Route>
          <Route path="/conditionals" element={<Conditionals />}></Route>
        </Routes>
      </>
  );
}

export default App;
