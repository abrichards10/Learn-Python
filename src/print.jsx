import Sidebar from "./sidebar";
import {Link} from "react-router-dom";
import React from "react";
import {DarkModeToggle} from "./dark_mode_toggle";

class Print extends React.Component {
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
                    <div className="main-home">
                        <DarkModeToggle></DarkModeToggle>
                        <h1>Print</h1>
                        <div className="code-background">
                            print("This is a print statement")
                        </div>
                        {this.state.showMessage && <div className="output">This is a print statement</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler}>Run</button><br/><br/>
                        Print multiple things
                        <div className="code-background">
                            print("One thing", "Another thing")
                        </div>
                        {this.state.showMessage1 && <div className="output">One thing Another thing</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler1}>Run</button>
                        <br/><br/>
                        Specify a separator
                        <div className="code-background">
                            print("One thing", "Another thing", sep="+++")
                        </div>
                        {this.state.showMessage2 && <div className="output">One thing+++Another thing</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler2}>Run</button>

                        {/*NAV BUTTONS*/}
                        <div className="nav-buttons">
                            <Link to="/comments" className="back-button"></Link>
                            <Link to="/variables" className="next-button"></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Print;