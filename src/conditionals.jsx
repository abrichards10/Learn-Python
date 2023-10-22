import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./dark_mode_toggle";
class Conditionals extends React.Component{
    state = {
        showMessage: false
    }
    onButtonClickHandler = () => {
        this.setState({showMessage: true});
    };
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
                        Conditionals are like ... a choose your adventure game<br/><br/>

                        Kinda like:<br/><br/>

                        <i>If I go <b>left</b> I encounter a dragon<br/>
                        But if I go <b>right</b> I meet a princess<br/>
                            Otherwise I keep going forward
                        </i><br/><br/>

                        ...so in code these conditions are determined by a <b>boolean</b><br/><br/>

                        and booleans are either <b>True</b> or <b>False</b><br/><br/>

                        so if it's <b><i>True</i></b> that the hero goes left --> they're gonna fight the dragon<br/>

                        if it's <b><i>False</i></b> then we check if he goes right instead<br/>

                        if that's <b><i>False</i></b> too then we end up defaulting to going forward<br/><br/>


                        in code we could set some variable to the direction the hero goes so it would look like this:<br/><br/>


                        <div className="code-background">
                            direction = "right"<br/>

                            &nbsp;if (direction == "right"):<br/>
                            &nbsp;&nbsp;&nbsp;print("You found a princess! 👸 "):<br/>
                            &nbsp;elif (direction == "left"):<br/>
                            &nbsp;&nbsp;&nbsp;print("You encountered a dragon! 🐉 "):<br/>
                            &nbsp;else:<br/>
                            &nbsp;&nbsp;&nbsp;print("You continue forward... coward")
                        </div>
                        {this.state.showMessage && <div className="output">You found a princess!</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler}>Run</button>
                        <br/><br/>

                        In this example, since the direction is "right" then the output would be "You found a princess!"



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