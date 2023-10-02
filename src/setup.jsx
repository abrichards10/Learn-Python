import React from "react";
import Sidebar from "./sidebar";
import {Link} from "react-router-dom";

class Setup extends React.Component {
    render() {
        return (
            <div id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <div id="page-wrap">
                    <div className="main-home">
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
    }
}

export default Setup;
