import React, { Component } from 'react';
import "./Navbar.css";
class Navbar extends Component {

    render() {
        return (

            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Alex Lo</a>
                    <div class="navbar-right">
                        <a href="https://github.com/alexlo15" target="_blank">GitHub</a>
                        <a href="https://linkedin.com/in/alexlo15" target="_blank">LinkedIn</a>
                        <a href="https://alexlo15.github.io" target="_blank">Portfolio</a>
                    </div>

                </nav>
            </>
        );
    };

};

export default Navbar;