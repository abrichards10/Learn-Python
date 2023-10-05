import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './index.css';
import {Link} from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Menu>
            <div className= "hello-world">
                <Link className="menu-item" style={{ textDecoration: 'none' }} to="/"> Hello World</Link>
            </div>
                <Link className="menu-item" style={{ textDecoration: 'none' }} to="/setup">Setup</Link>
                <Link className="menu-item" style={{ textDecoration: 'none' }} to="/comments">Comments</Link>
                <Link className="menu-item" style={{ textDecoration: 'none' }} to="/print">Print</Link>
                <Link className="menu-item" style={{ textDecoration: 'none' }} to="/variables">Variables</Link>
                <Link className="menu-item" style={{ textDecoration: 'none' }} to="/conditionals">Conditionals</Link>
        </Menu>
    );
};