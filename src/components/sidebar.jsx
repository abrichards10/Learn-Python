import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './index.css';
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Menu>
            <a className="menu-item hello-world" href="/">
                Hello World
            </a>
            <a className="menu-item" href="/setup">
                Setup
            </a>
            <a className="menu-item" href="/comments">
                Comments
            </a>
            <a className="menu-item" href="/print">
                Print
            </a>
            <a className="menu-item" href="/variables">
                Variables
            </a>
            <a className="menu-item" href="/conditionals">
                Conditionals
            </a>
        </Menu>
    );
};