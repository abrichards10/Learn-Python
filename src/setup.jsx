import React from "react";
import Sidebar from "./sidebar";
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./dark_mode_toggle";

class Setup extends React.Component {
    render() {
        return (
            <div id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <div id="page-wrap">
                    <div className="main-home">
                        <DarkModeToggle></DarkModeToggle>
                        <h1>Setup</h1>
                        <p>
                            Install Python --> (Probably don't have to tbh)<br/>
                            <a href="http://wiki.python.org/moin/BeginnersGuide/Download">Install</a>
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
