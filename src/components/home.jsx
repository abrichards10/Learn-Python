import React from "react";
import Sidebar from "./sidebar";
import "./index.css"
import {Link, useNavigate} from "react-router-dom";
const Home = () => {
    let navigate = useNavigate();
    const routeChangeNext = () =>{
        let path = `./setup`;
        navigate(path);
    }

    return (
        <div id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">
                <div className="main-home">
                    <h1>Greetings</h1>
                    <p>Hello!  I’m Brooke and I am here to teach you Python.
                        This is an ongoing project that will continue to grow
                        with time and include many more topics!  I will go over
                        them slowly, step by step, with added solutions and links
                        to videos for more explanations. Feel free to submit a form
                        link if I foolishly gave anything that is outdated or incorrect. :D
                    </p>
                    <Link to="/setup" className="next-button"></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;