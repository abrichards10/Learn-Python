import './App.css';
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/home";
import Setup from "./components/setup";
import Comments from "./components/comments";

function App() {
  return (
      <>
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path="/setup" element={<Setup />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
        </Routes>
      </>
  );
}

export default App;
