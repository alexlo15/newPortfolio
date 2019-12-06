import React, { Component } from 'react';
import "./Navbar.css";
class NavBar extends Component {

    render() {
        return (

            <>
                    <nav className="navbar sticky-top navbar-dark bg-dark">
                        <div className="row">
                            <div className="col-4">
                                <a href="https://github.com/alexlo15" target="_blank"><img alt="" className="navbutts" src={require("../../Images/Pictures/github.jpg")} /></a>
                            </div>
                            <div className="col-4">
                                <a href="https://linkedin.com/in/alexlo15" target="_blank"><img alt="" className="navbutts" src={require("../../Images/Pictures/linkedin.jpg")} /></a>
                            </div>
                            <div className="col-4">
                                <a href="https://alexlo15.github.io" target="_blank"><img alt="" className="navbutts" src={require("../../Images/portfolio.png")} /></a>
                            </div>
                        </div>
                    </nav>
            </>
        );
    };

};

export default NavBar;