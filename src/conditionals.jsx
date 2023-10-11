import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./dark_mode_toggle";
class Conditionals extends React.Component{
    render() {
        return (
            <div id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div id="page-wrap">
                    <div className="box-top">
                        <DarkModeToggle></DarkModeToggle>
                    </div>
                    <div className="main-home">
                        <h1>Conditionals</h1>
                        <div className="nav-buttons">
                            <Link to="/variables" className="back-button"></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conditionals;