import React from "react";
import Sidebar from "./sidebar";
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
                </div>
            </div>
        </div>
    );
};

export default Setup;
