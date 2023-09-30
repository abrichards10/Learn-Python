import React from "react";
import Sidebar from "./sidebar";
import {Link, useNavigate} from "react-router-dom";

const Setup = () => {
    return (
        <div id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">
                <div className="main-setup">
                    <h1>Setup</h1>
                    <p>
                        Setup Instructions
                    </p>
                    <div className="nav-buttons">
                        <Link to="/" className="back-button"></Link>
                        <Link to="/comments" className="next-button"></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setup;
