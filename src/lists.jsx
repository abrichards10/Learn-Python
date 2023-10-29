import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./darkModeToggle";

//  npm run deploy
class Lists extends React.Component {

    state = {
        showMessage: false
    }
    onButtonClickHandler = () => {
        this.setState({showMessage: true});
    };
        
    render() {
        return (
            <div id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <div id="page-wrap">
                    <div className="box-top">
                        <DarkModeToggle></DarkModeToggle>
                    </div>
                    <div className="main-home">
                        <h1>Lists</h1>
                        <p>
                            <div className="code-background">
                                direction = "right"<br/>

                                &nbsp;if (direction == "right"):<br/>
                                &nbsp;&nbsp;&nbsp;print("You found a princess! 👸 "):<br/>
                                &nbsp;elif (direction == "left"):<br/>
                                &nbsp;&nbsp;&nbsp;print("You encountered a dragon! 🐉 "):<br/>
                                &nbsp;else:<br/>
                                &nbsp;&nbsp;&nbsp;print("You continue forward... coward")
                            </div>
                            {this.state.showMessage && <div className="output">You found a princess! 👸 </div>}
                            <button className="run-code-button" onClick={this.onButtonClickHandler}>Run</button>
                            <br/><br/>
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
                            <Link to="/conditionals" className="back-button"></Link>
                            <Link to="/loops" className="next-button"></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lists;