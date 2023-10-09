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
                    <div className="main-home">
                        <DarkModeToggle></DarkModeToggle>
                        <h1>Setup</h1>
                        <p>
                            Install Python --> <i>(Probably don't have to tbh, it's usually installed)</i>
                            <br/><a className="download-links" href="https://wiki.python.org/moin/BeginnersGuide/Download">Install</a>

                            <br/> <br/>Windows? Put this in the command line:
                            &nbsp;<div className="terminal-commands">\Users\<i>Your Name></i>python --version</div>

                            <br/><br/>Mac/Linux? Put this in terminal:
                            &nbsp;<div className="terminal-commands">python --version</div>
                            <i>Command not found? Try: python3 --version</i>

                            <br/><br/><i>Pro Tip: python / python3 <b>RUNS</b> the file</i>

                            <br/><br/>You should have at least <i>one</i> of these:
                            <br/><a className="download-links" href="https://www.jetbrains.com/idea/download/?section=mac">Intellij</a>
                            <br/><a className="download-links" href="https://code.visualstudio.com/download">Visual Studio Code</a>

                            <br/>
                            <ul>
                                <li>Create a new file in one of them</li>
                                <li>Save it as helloworld.py</li>
                                <li>Open it</li>
                                <li>Type this:<div className="code-background-example">
                                    print("Hello World")
                                </div></li>
                                <li>Run this in your Command Line/ Terminal:
                                    &nbsp;<div className="terminal-commands">python3 helloworld.py</div>
                                </li>
                            </ul>

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
