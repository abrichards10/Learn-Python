import React, {useState} from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link} from "react-router-dom";
import {DarkModeToggle} from "./darkModeToggle";
import Snek from "./Snek.png";
//  npm run deploy
class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
        <div id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">
                <DarkModeToggle></DarkModeToggle>
                <div className="main-home">
                    <div className="home-top" >
                        <div className="greetings"><h1>Greetingsss</h1></div>
                        <img src={Snek} alt="snek" className="snek-pic"/>
                    </div>
                    <p>Hello!  I’m Brooke and I am here to teach you how to code.
                        This is an ongoing project that will continue to grow
                        with time and include many more topics!  I will go over
                        them slowly - step by step, with added solutions and links
                        to videos for more explanations. Feel free to submit a form
                        link if I foolishly gave anything that is outdated or incorrect. :D
                    </p>
                    <div className="nav-buttons">
                        <Link to="/setup" className="next-button"></Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;