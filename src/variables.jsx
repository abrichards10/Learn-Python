import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./darkModeToggle";
class Variables extends React.Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
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

    onButtonClickHandler3 = () => {
        this.setState({showMessage3: true});
    };

    onButtonClickHandler4 = () => {
        this.setState({showMessage4: true});
    };

    onButtonClickHandler5 = () => {
        this.setState({showMessage5: true});
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
                        There are different <i>types</i> of data in Python:
                        <ul>
                            <li>int --> an integer (ex: 3) </li>
                            <li>string --> anything between quotes (ex: "amongus") </li>
                            <li>float --> decimals or integers (ex: 4.0 or 4.5) </li>
                            <li>Probably some more</li>
                        </ul>

                        <i>Note: for strings you can surround them with single '' or double quotes ""</i><br/><br/>

                        <b>type()</b> tells the user the data type

                        <div className="code-background">
                            business = "Nunya" <br/>
                            &nbsp;print(type(business))
                        </div>
                        {this.state.showMessage2 && <div className="output">&lt;class 'str'&gt;</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler2}>Run</button><br/><br/>

                        You can <i>cast</i> types of data to another type:
                        <ul>
                            <li>int(x) --> <i>changes x to an int</i></li>
                            <li>string(y) --> <i>changes y to a String</i></li>
                            <li>float(z) --> <i>changes z to a float</i></li>
                        </ul><br/>

                        CAST a variable to another type
                        <div className="code-background">
                            casted_str = int("4") <br/>
                            &nbsp;print(type(casted_str))
                        </div>
                        {this.state.showMessage3 && <div className="output">&lt;class 'int'&gt;</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler3}>Run</button><br/><br/>

                        You can do it with Strings too!
                        <div className="code-background">
                            casted_int = str(6) <br/>
                            &nbsp;print(type(casted_int))
                        </div>
                        {this.state.showMessage4 && <div className="output">&lt;class 'str'&gt;</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler4}>Run</button><br/><br/>

                        ... or floats!
                        <div className="code-background">
                            casted_float = float(7) <br/>
                            &nbsp;print(type(casted_float))
                        </div>
                        {this.state.showMessage5 && <div className="output">&lt;class 'float'&gt;</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler5}>Run</button><br/><br/>

                        <h3>You just learned about variables! Nice!</h3>

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