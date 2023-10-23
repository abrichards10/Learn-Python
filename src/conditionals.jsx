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

    onButtonClickHandler1 = () => {
        this.setState({showMessage1: true});
    };

    onButtonClickHandler2 = () => {
        this.setState({showMessage2: true});
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
                        Conditionals are like ... a choose your own adventure game<br/><br/>

                        Kinda like:<br/><br/>

                        &emsp;&emsp;<i>If I go <b>left</b> I encounter a dragon<br/>
                        &emsp;&emsp;But if I go <b>right</b> I meet a princess<br/>
                        &emsp;&emsp;<b>Otherwise</b> I keep going forward
                        </i><br/><br/>

                        ...so in code these conditions are determined by a <b>boolean</b><br/><br/>

                        <i>(another data type)</i><br/><br/>

                        and booleans are either <b>True</b> or <b>False</b><br/><br/>

                        so if it's <b><i>True</i></b> that the hero goes left --> they're gonna fight the dragon<br/>

                        if it's <b><i>False</i></b> then we check if he goes right instead to the princess<br/>

                        if that's <b><i>False</i></b> too then we end up defaulting to going forward<br/><br/>

                        In code, we could set some variable to the direction the hero goes so it would look like this:<br/><br/>


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

                        In this example, since the hero went "right" then the output would be "You found a princess!"<br/><br/>

                        <h3>To break it down:</h3>
                        <ul>
                            <li>The conditional is evaluated in the parenthesis ()</li>
                            <li>Each conditional ends with a colon " : "</li>
                            <li>It compares values --> <i>(in this case two values: direction with "right" or "left")</i></li>
                            <li>It uses the double equals sign "==" to compare values</li>
                            <li>If the condition is <b>True</b> then everything inside the conditional is run</li>
                            <li>If none of the if or elif conditionals evaluate to true, we default to running what's in 'else'</li>
                        </ul><br/>

                        <h3>Note:</h3>

                        More than one "if" statement can be true <br/>
                        <i>Ex: </i> <br/>
                        <div className="code-background">
                            if ( 2 > 1 ):<br/>
                            &nbsp;&nbsp;&nbsp;print("2 is bigger"):<br/>
                            &nbsp;if ( 3 > 1 ):<br/>
                            &nbsp;&nbsp;&nbsp;print("3 is bigger"):<br/>
                        </div>
                        {this.state.showMessage1 && <div className="output">2 is bigger<br/>&emsp;3 is bigger</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler1}>Run</button>
                        <br/><br/>

                        But if you use elif, it only runs the <b>first</b> true conditional
                        <br/>
                        <i>Ex: </i> <br/>
                        <div className="code-background">
                            if ( 2 > 1 ):<br/>
                            &nbsp;&nbsp;&nbsp;print("2 is bigger"):<br/>
                            &nbsp;elif ( 3 > 1 ):<br/>
                            &nbsp;&nbsp;&nbsp;print("3 is bigger"):<br/>
                        </div>
                        {this.state.showMessage2 && <div className="output">2 is bigger</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler2}>Run</button>
                        <br/><br/>



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