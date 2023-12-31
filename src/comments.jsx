import Sidebar from "./sidebar";
import {Link} from "react-router-dom";
import React from "react";
import {DarkModeToggle} from "./darkModeToggle";
class Comments extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <div id="page-wrap">
                    <div className="box-top">
                        <DarkModeToggle></DarkModeToggle>
                    </div>
                    <div className="main-home">
                        <div className="nav-buttons">
                            <Link to="/setup" className="back-button"></Link>
                            <Link to="/print" className="next-button"></Link>
                        </div>
                        <h1>Comments</h1>
                        <p>
                            <div className="code-background">
                                # This is a comment
                            </div>
                            <br/>
                            <div className="code-background">
                                print(“Hi”) # So is this
                            </div>
                            <br/>
                            <i>(Psst, put a hashtag in front)</i><br/><br/>
                            <div className="code-background">
                                “””<br/>&nbsp;
                                Everything between these 3 quotes is a comment<br/>
                                &nbsp;“””
                            </div>
                        </p>
                        <div className="nav-buttons">
                            <Link to="/setup" className="back-button"></Link>
                            <Link to="/print" className="next-button"></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;