import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./home";
import Setup from "./setup";
import Comments from "./comments";
import Print from "./print";
import Variables from "./variables";
import Conditionals from "./conditionals";
import Feedback from "./feedback";
import Lists from "./lists";
import Loops from "./loops";

function App() {
    return (
        <div id="outer-container">
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/setup" element={<Setup />}></Route>
                <Route path="/comments" element={<Comments />}></Route>
                <Route path="/print" element={<Print />}></Route>
                <Route path="/variables" element={<Variables />}></Route>
                <Route path="/conditionals" element={<Conditionals />}></Route>
                <Route path="/lists" element={<Lists />}></Route>
                <Route path="/loops" element={<Loops />}></Route>
                <Route path="/feedback" element={<Feedback />}></Route>
            </Routes>
        </div>
    );
}

export default App;
