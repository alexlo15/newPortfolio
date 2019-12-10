import React, { Component } from 'react';
import "./Navbar.css";
import SocialButts from "./Social butts/SocialButtons";
class NavBar extends Component {

    render() {
        return (

            <>
                <nav className="navbar sticky-top Nav">
                    <SocialButts />
                </nav>
            </>
        );
    };

};

export default NavBar;

