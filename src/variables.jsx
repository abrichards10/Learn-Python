import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./dark_mode_toggle";
class Variables extends React.Component{

    state = {
        showMessage: false
    }
    onButtonClickHandler = () => {
        this.setState({showMessage: true});
    };

    onButtonClickHandler1 = () => {
        this.setState({showMessage1: true});
    };
    render() {
        return (
            <div id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <div id="page-wrap">
                    <div className="main-home">
                        <DarkModeToggle></DarkModeToggle>
                        <h1>Variables</h1>
                        Declare a variable
                        <div className="code-background">
                            x = 1 <br/>
                            &nbsp;print(x)
                        </div>
                        {this.state.showMessage && <div className="output">1</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler}>Run</button><br/><br/>
                        Declare another variable
                        <div className="code-background">
                            y = "Yeet" <br/>
                            &nbsp;print(y)
                        </div>
                        {this.state.showMessage1 && <div className="output">Yeet</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler1}>Run</button><br/><br/>
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