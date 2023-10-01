import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
class Variables extends React.Component{
    render() {
        return (
            <div id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <div id="page-wrap">
                    <div className="main-home">
                        <h1>Variables</h1>
                        <div className="nav-buttons">
                            <Link to="/print" className="back-button"></Link>
                            <Link to="/conditionals" className="next-button"></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Variables;