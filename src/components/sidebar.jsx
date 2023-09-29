import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './index.css';
export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Hello World
            </a>
            <a className="menu-item" href="/setup">
                Setup
            </a>
            <a className="menu-item" href="/comments">
                Comments
            </a>
        </Menu>
    );
};