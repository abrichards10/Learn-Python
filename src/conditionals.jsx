import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./darkModeToggle";
class Conditionals extends React.Component{
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

                        so if it's <b><i>True</i></b> that the hero goes left --&gt; they're gonna fight the dragon<br/>

                        if it's <b><i>False</i></b> then we check if he goes right instead to the princess<br/>

                        if that's <b><i>False</i></b> too then we end up defaulting to going forward<br/><br/>


                        Conditionals can be evaluated through logical comparisons:<br/>
                        <i>(Sorry, no easier way to say that :p ) </i>
                        <ul>
                            <li>x == y  --&gt;  equals<br/></li>
                            <li> x != y  --&gt;  does not equal<br/></li>
                            <li>x &gt; y  --&gt; greater than<br/></li>
                            <li>x &lt; y --&gt; less than<br/></li>
                            <li>x &gt;= y  --&gt; greater than or equal to</li>
                            <li>x &lt;= y  --&gt; less than or equal to</li>
                        </ul><br/>

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
                            <li>Everything under the conditional that is <b>indented</b> is part of that conditional</li>
                            <li>It compares values --&gt; <i>(in this case two values: direction with "right" or "left")</i></li>
                            <li>It uses the double equals sign "==" to compare values</li>
                            <li>If the condition is <b>True</b> then everything inside the conditional is run</li>
                            <li>If none of the 'if' or 'elif' conditionals evaluate to true, we default to running what is in 'else'</li>
                        </ul><br/>

                        <h3>Note:</h3>

                        More than one "if" statement can be true <br/>
                        <i>Ex: </i> <br/>
                        <div className="code-background">
                            if ( 2 &gt; 1 ):<br/>
                            &nbsp;&nbsp;&nbsp;print("2 is bigger"):<br/>
                            &nbsp;if ( 3 &gt; 1 ):<br/>
                            &nbsp;&nbsp;&nbsp;print("3 is bigger"):<br/>
                        </div>
                        {this.state.showMessage1 && <div className="output">2 is bigger<br/>&emsp;3 is bigger</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler1}>Run</button>
                        <br/><br/>

                        But if you use elif, it only runs the <b>first</b> true conditional
                        <br/>
                        <i>Ex: </i> <br/>
                        <div className="code-background">
                            if ( 2 &gt; 1 ):<br/>
                            &nbsp;&nbsp;&nbsp;print("2 is bigger"):<br/>
                            &nbsp;elif ( 3 &gt; 1 ):<br/>
                            &nbsp;&nbsp;&nbsp;print("3 is bigger"):<br/>
                        </div>
                        {this.state.showMessage2 && <div className="output">2 is bigger</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler2}>Run</button>
                        <br/><br/>

                        <i>Psst - you don't always have to use elif ;) </i><br/><br/>

                        You can also <b>nest</b> if statements 👀<br/><br/>

                        <i>Ex: </i> <br/>
                        <div className="code-background">
                            a = 4<br/>
                            &nbsp;b = 3<br/>
                            &nbsp;c = 2<br/>
                            &nbsp;if ( a &gt; b ):<br/>
                            &nbsp;&nbsp;&nbsp;if ( b &gt; c ):<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("inner nested conditional")<br/>
                        </div>
                        {this.state.showMessage4 && <div className="output">inner nested conditional</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler4}>Run</button>
                        <br/><br/>

                        <i>Note: </i><br/>
                        it's an <b>inner</b> conditional bc it's <b>indented</b><br/><br/>



                        <h3>"And" | "Or" | "Not" </h3><br/>

                        You can also combine conditionals<br/><br/>

                        <ul>
                            <li>and --&gt; all conditionals need to be met to be true</li>
                            <li>or --&gt; at least one condition needs to be bet to be true</li>
                            <li>not --&gt; referring to when a conditional is <b>not</b> true</li>
                        </ul><br/>

                        <i>I do <b><i>not</i></b> see "not" used much :D</i><br/><br/><br/>

                        ...<br/><br/><br/>

                        I'm so sorry – have an example<br/><br/>

                        <div className="code-background">
                            if ( (2 &gt; 1) and ( 4 &gt; 3 ) ):<br/>
                            &nbsp;&nbsp;&nbsp;print("both are true")<br/>
                            &nbsp;if ( (3 &gt; 1) or (4 &lt; 2) or (5 &gt; 10)):<br/>
                            &nbsp;&nbsp;&nbsp;print("at least one is true")<br/>
                            &nbsp;if ( not 1 &gt; 2):<br/>
                            &nbsp;&nbsp;&nbsp;print("1 is not greater than 2")
                        </div>
                        {this.state.showMessage3 && <div className="output">both are true <br/>&emsp;at least one is true<br/>&emsp;1 is not greater than 2</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler3}>Run</button>
                        <br/><br/>

                        <h3>One last thing!</h3>

                        If you want an if statement to exist but don't know what to put in it yet... <br/>

                        use <b>pass</b><br/>

                        <i>(bc "if" statements don't like being empty)</i><br/><br/>

                        <div className="code-background">
                            if (a == b):<br/>
                            &nbsp;&nbsp;&nbsp;pass<br/>
                            &nbsp;elif (a != b):<br/>
                            &nbsp;&nbsp;&nbsp;pass<br/>

                        </div>

                        <i>(no run button bc there's no output!) </i>

                        <h3>Congrats! You made it through conditionals :D</h3>

                        <div className="nav-buttons">
                            <Link to="/variables" className="back-button"></Link>
                            <Link to="/lists" className="next-button"></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conditionals;