import './App.css';
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/home";
import Setup from "./components/setup";
import Comments from "./components/comments";
import Print from "./components/print";
import Variables from "./components/variables"
import Conditionals from "./components/conditionals"
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
