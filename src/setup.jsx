import React from "react";
import Sidebar from "./sidebar";
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./dark_mode_toggle";

class Setup extends React.Component {
    render() {
        return (
            <div id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <div id="page-wrap">
                    <div className="box-top">
                        <DarkModeToggle></DarkModeToggle>
                    </div>
                    <div className="main-home">
                        <h1>Setup</h1>
                        <p>
                            Install Python --> <i>(Probably don't have to tbh, it's usually installed)</i>
                            <br/><a className="download-links" href="https://wiki.python.org/moin/BeginnersGuide/Download">Install</a>

                            <br/> <br/>Windows? Put this in the command line:
                            &nbsp;<div className="terminal-commands" onClick={() => navigator.clipboard.writeText("\\Users\\Your Name>python --version")}>\Users\<i>Your Name></i>python --version</div>

                            <br/><br/>Mac/Linux? Put this in terminal:
                            &nbsp;<div className="terminal-commands" onClick={() => navigator.clipboard.writeText("python --version")}>python --version</div>
                            <i>Command not found? Try: py --version</i> OR <i>python3 --version</i>

                            <br/><br/><i>&nbsp;&nbsp;Pro Tip: python / python3 <b>RUNS</b> the file</i>

                            <br/><br/>You should have at least <b>one</b> of these:
                            <br/><a className="download-links" href="https://www.jetbrains.com/idea/download/?section=mac">Intellij</a>
                            <br/><a className="download-links" href="https://code.visualstudio.com/download">Visual Studio Code</a>

                            <br/>
                            <ul>
                                <li>Create a new file in one of them</li>
                                <li>Save it as helloworld.py</li>
                                <li>Open it</li>
                                <li>Type this in the file:<div className="code-background">
                                    print("Hello World!")
                                </div></li>
                                <li>Run this in your Command Line / Terminal:
                                    &nbsp;<div className="terminal-commands" onClick={() => navigator.clipboard.writeText("python3 helloworld.py")}>python3 helloworld.py</div>
                                </li>
                                <li>You should get this: <div className="output-example">Hello World!</div> </li>

                            </ul>
                            Now you can start coding!
                        </p>
                        <div className="nav-buttons">
                            <Link to="/" className="back-button"></Link>
                            <Link to="/comments" className="next-button"></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setup;
