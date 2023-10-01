import Sidebar from "./sidebar";
import {Link} from "react-router-dom";
import React from "react";

const Print = () => {
    return (
        <div id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">
                <div className="main-home">
                    <h1>Print</h1>

                        <div className="code-background">
                            print("This is a print statement")
                        </div><br/><br/>

                        Print multiple things
                        <div className="code-background">
                            print("One thing", "Another thing")
                        </div><br/><br/>

                    <div className="nav-buttons">
                        <Link to="/comments" className="back-button"></Link>
                        <Link to="/variables" className="next-button"></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Print;