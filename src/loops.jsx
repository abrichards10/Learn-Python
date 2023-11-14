import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./darkModeToggle";

//  npm run deploy
class Loops extends React.Component {
    render() {
        return (
        <div id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">
                <div className="box-top">
                    <DarkModeToggle></DarkModeToggle>
                </div>
                <div className="main-home">
                    <p>
                        <h1>Loops</h1>
                        Loops are tricky ngl<br/><br/><br/>

                        There are two main types of loops that are popular:<br/>

                        <ul>
                            <li>for</li>
                            <li>while</li>

                        </ul><br/><br/>

                        We use <b>for</b> loops to iterate over things sequentially<br/><br/><br/>

                        like this: <br/>





                    </p>
                    <div className="nav-buttons">
                        <Link to="/lists" className="back-button"></Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Loops;