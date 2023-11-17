import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./darkModeToggle";

//  npm run deploy
class Loops extends React.Component {

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

    onButtonClickHandler6 = () => {
        this.setState({showMessage6: true});
    };

    onButtonClickHandler7 = () => {
        this.setState({showMessage7: true});
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
                    <div className="nav-buttons">
                        <Link to="/lists" className="back-button"></Link>
                    </div>
                    <p>
                        <h1>Loops</h1>
                        Loops are tricky ngl<br/><br/><br/>
                        There are two main types of loops that are popular:<br/>
                        <ul>
                            <li>for</li>
                            <li>while</li>
                        </ul><br/><br/>
                        We use <b>for</b> loops to iterate over things sequentially<br/><br/><br/>
                        Like this: <br/>
                        <div className="code-background">
                            food_list = ["carrots", "peas", "mushrooms", "salami"]<br/>
                            &emsp;for i in food_list:<br/>
                            &emsp;&emsp;print(i)
                        </div>
                        {this.state.showMessage && <div className="output">
                            carrots<br/>&emsp;
                            peas<br/>&emsp;
                            mushrooms<br/>&emsp;
                            salami
                        </div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler}>Run</button>
                        <br/>
                        In this case, we're setting a variable ' i ' equal to the current item in the list<br/><br/><br/>
                        You can also loop through words:<br/>
                        <div className="code-background">
                            for i in "soup":<br/>
                            &emsp;&emsp;print(i)
                        </div>
                        {this.state.showMessage1 && <div className="output">
                            s<br/>&emsp;
                            o<br/>&emsp;
                            u<br/>&emsp;
                            p
                        </div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler1}>Run</button>
                        <br/>
                        This is because Strings are basically just a list of characters - so they're loopable (I know, I know... it's <i>iterable</i>)<br/><br/><br/>
                        You can also iterate through a <b>range</b> of things using... well, range()<br/><br/><br/>
                        Like this: <br/>
                        <div className="code-background">
                            for i in range(3):<br/>
                            &emsp;&emsp;print("Yo welcome back to another unboxing")
                        </div>
                        {this.state.showMessage4 && <div className="output">
                            Yo welcome back to another unboxing<br/>&emsp;
                            Yo welcome back to another unboxing<br/>&emsp;
                            Yo welcome back to another unboxing
                        </div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler4}>Run</button>
                        <br/><br/><br/>
                        Using range() is cool bc you can specify starting and stopping values (the default is 0)<br/><br/>
                        Like this: <br/>
                        <div className="code-background">
                            for r in range(2, 5):<br/>
                            &emsp;&emsp;print(r)
                        </div>
                        {this.state.showMessage5 && <div className="output">
                            2<br/>&emsp;
                            3<br/>&emsp;
                            4
                        </div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler5}>Run</button>
                        <br/>
                        So '2' is the start value and '5' is the end... <br/>
                        Notice how it <i><b>includes</b></i> the 2 as part of the range but not 5 <br/><br/><br/>
                        One more thing with range you can do:  <br/>
                        <div className="code-background">
                            for r in range(2, 20, 3):<br/>
                            &emsp;&emsp;print(r)
                        </div>
                        {this.state.showMessage6 && <div className="output">
                            2<br/>&emsp;
                            5<br/>&emsp;
                            8<br/>&emsp;
                            11<br/>&emsp;
                            14<br/>&emsp;
                            17
                        </div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler6}>Run</button>
                        <br/>
                        Here we're basically <b>starting</b> at 2, <b>ending</b> at 20, and <b>incrementing</b> by 3<br/><br/><br/>
                        There's also this thing called <b>break</b> you can use if you want to stop looping<br/><br/><br/>
                        Think, "<i>I want to break free</i>":<br/>
                        <div className="code-background">
                            &nbsp;num_list = [1, 2, 3, 4, 5, 6, 7]<br/>
                            &emsp;for x in num_list:<br/>
                            &emsp;&emsp;print(x)<br/>
                            &emsp;&emsp;if x == 4:<br/>
                            &emsp;&emsp;&emsp;&emsp;break<br/>
                        </div>
                        {this.state.showMessage2 && <div className="output">
                            1<br/>&emsp;
                            2<br/>&emsp;
                            3<br/>&emsp;
                            4
                        </div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler2}>Run</button>
                        <br/>
                        This way, once we hit a certain point in the iteration, we can just yeet our way out<br/><br/><br/>
                        We can also use <b>continue</b> to stop looping and start a new iteration<br/><br/><br/>
                        Like this: <br/>
                        <div className="code-background">
                            &nbsp;num_list = [1, 2, 3, 4, 5, 6]<br/>
                            &emsp;for j in num_list:<br/>
                            &emsp;&emsp;if j == 4:<br/>
                            &emsp;&emsp;&emsp;&emsp;continue<br/>
                            &emsp;&emsp;print(j)<br/>
                        </div>
                        {this.state.showMessage3 && <div className="output">
                            1<br/>&emsp;
                            2<br/>&emsp;
                            3<br/>&emsp;
                            5<br/>&emsp;
                            6</div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler3}>Run</button>
                        <br/>
                        So basically we got to '4' and immediately went to the next iteration with 'continue'.<br/><br/><br/>
                        Just like if statements, you can <b>nest</b> for loops :D <br/><br/><br/>
                        Like this: <br/>
                        <div className="code-background">
                            size = ["big", "small", "medium"]<br/>
                            &nbsp;clothing = ["shirt", "pants", "jorts"]<br/>
                            &nbsp;for i in size:<br/>
                            &emsp;&emsp;for j in clothing:<br/>
                            &emsp;&emsp;&emsp;&emsp;print(i, j)<br/>
                        </div>
                        {this.state.showMessage7 && <div className="output">
                            &nbsp;big shirt<br/>&emsp;
                            big pants<br/>&emsp;
                            big jorts<br/>&emsp;
                            small shirt<br/>&emsp;
                            small pants<br/>&emsp;
                            small jorts<br/>&emsp;
                            medium shirt<br/>&emsp;
                            medium pants<br/>&emsp;
                            medium jorts
                        </div>}
                        <button className="run-code-button" onClick={this.onButtonClickHandler7}>Run</button>
                        <br/>
                        Also forgot to mention we can print things with a comma like that 👀
                    </p>
                    <div className="nav-buttons">
                        <Link to="/lists" className="back-button"></Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Loops;