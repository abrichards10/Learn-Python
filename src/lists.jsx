import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./darkModeToggle";

//  npm run deploy
class Lists extends React.Component {

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

                            This is a list: <br/>
                            ["dragon", "princess", "knight", "horse"]<br/><br/><br/>

                            <ul>
                                <li>
                                    List items are stored in square brackets '[ ]' separated by commas ' , '
                                </li>
                                <li>
                                    A list is like a box of ~things~
                                </li>
                                <li>
                                    Python is special - you can store things of the same <b>type</b>
                                </li>
                                <li>
                                    Lists are <b><i>ordered</i></b>, <b><i>changeable</i></b>, and allow <b><i>duplicates</i></b><br/><br/>
                                </li>
                            </ul><br/>

                            (There's also <b>tuples</b>, <b>sets</b> and <b>dictionaries</b> which we'll cover later...)<br/><br/><br/>

                            So a list can look like this: <br/>
                            [3, "crisps", False, 3.8, "eleventeen"]<br/>
                            ...and still be valid!<br/><br/><br/>


                            If you wanna fetch something from a list, you would reference its <i>index</i><br/>
                            ...the index refers to <b>where</b> something is in a list<br/>
                            ...it increases numerically from 0 --> so the first item in a list is at index '0'<br/><br/><br/>

                            ...and in order to get access to an item you would reference the list followed by brackets with the number inside!<br/><br/><br/>

                            Like this:
                            <div className="code-background">
                                &nbsp;my_list = [3, 5, 1, 2, 7, 8]<br/>
                                &nbsp;&nbsp;print(my_list[0])<br/>
                                &nbsp;&nbsp;print(my_list[2])<br/>
                                &nbsp;&nbsp;print(my_list[5])
                            </div>
                            {this.state.showMessage && <div className="output">3<br/>&nbsp;&nbsp;1<br/>&nbsp;&nbsp;8</div>}
                            <button className="run-code-button" onClick={this.onButtonClickHandler}>Run</button>
                            <br/><br/>
                            <br/>

                            <h3>Length</h3><br/>

                            Want the size? use len()<br/><br/><br/>

                            Like this:
                            <div className="code-background">
                                &nbsp;my_list = [3, 5, 1, 2, 7, 8]<br/>
                                &nbsp;&nbsp;print(len(my_list))
                            </div>
                            {this.state.showMessage2 && <div className="output">6</div>}
                            <button className="run-code-button" onClick={this.onButtonClickHandler2}>Run</button>
                            <br/><br/><br/>



                            <h3>Nested Lists</h3><br/>
                            You can even create lists <b>inside</b> of lists: <br/>

                            [3, ["apples", "oranges", "bananas"], 27, 8, "giraffe"]<br/><br/><br/>

                            So if you want to access a list INSIDE of a list you have to do something special<br/><br/><br/>

                            ... basically you would have to use 2 brackets<br/><br/><br/>

                            Like this:<br/>
                            <div className="code-background">
                                &nbsp;my_list = [3, ["bacon", "pancakes", "eggs"], 4, 2]<br/>
                                &nbsp;&nbsp;print(my_list[1][1])<br/>
                                &nbsp;&nbsp;print(my_list[1][2])<br/>
                            </div>
                            {this.state.showMessage1 && <div className="output">pancakes<br/>&nbsp;&nbsp;eggs</div>}
                            <button className="run-code-button" onClick={this.onButtonClickHandler1}>Run</button>
                            <br/><br/><br/>

                            Here, in order to get 'eggs' we would reference the outer list first with [1] (the first item in the outer list)<br/>

                            ... then we would reference the index of the <i>inner</i> list with [2]<br/><br/><br/>

                            <i>btw...</i><br/>

                            <ul>
                               <li>
                                   tuples are <b><i>ordered</i></b>, <b><i>unchangeable</i></b>, and allow <b><i>duplicates</i></b>
                               </li>
                                <li>sets are <b><i>unordered</i></b>, <b><i>unchangeable</i></b>, <b><i>unindexed</i></b> and do <b>not</b> allow <b><i>duplicates</i></b>
                                </li>
                                <li>
                                    dictionaries are <b><i>ordered</i></b>, <b><i>changeable</i></b>, and do <b>not</b> allow <b><i>duplicates</i></b><br/><br/>
                                </li>
                            </ul><br/>

                            <h3>Now you know stuff about lists! :D </h3>
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