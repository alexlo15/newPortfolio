import React, { Component } from 'react';
import "./Navbar.css";
class Navbar extends Component {

    render() {
        return (

            <>
                <nav className="navbar nav-sticky navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Alex Lo</a>
                    <div className="navbar-right">
                        <a href="https://github.com/alexlo15" target="_blank"><img className="navbutts" src={require("../../Images/Pictures/github.jpg")}/></a>
                        <a href="https://linkedin.com/in/alexlo15" target="_blank"><img className="navbutts" src={require("../../Images/Pictures/linkedin.jpg")}/></a>
                        <a href="https://alexlo15.github.io" target="_blank"><img className="navbutts" src={require("../../Images/portfolio.png")}/></a>
                    </div>

                </nav>
            </>
        );
    };

};

export default Navbar;