import React from 'react';
import Sidebar from "./sidebar";
class Feedback extends React.Component {
    render() {
        return (
            <div id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <div className="main-home">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc0i4C9Fi51ruI6yYXZchbSvkIGe6NOSJDNf1f-RXxVP1FFvA/viewform?embedded=true"
                        width="640" height="407" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                    </iframe>
                </div>
            </div>
        );
    }
}

export default Feedback;