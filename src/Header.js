import React, { Component } from "react";
import "./Header.css"


class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* Brand Logo */}
                <img className ="logo" src="logo192.png" /> 
            </div>
        );
    }
}

export default Header;