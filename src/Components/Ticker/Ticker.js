import React, { Component } from "react";
import "./Ticker.css";

class Ticker extends Component {
    render() {
        return (
            <>
                <p className="marquee"><span>Thank you for visiting my Portfolio page! I'm Alex, a Full Stack Web Developer, looking to take my career to the next level.</span></p>
                <p className="marquee"><span>I enjoy making crisp clean web pages while challenging myself to balance simplicity and creativity. Scroll down to see my work and skills.</span></p>
            </>
        );
    }
};

export default Ticker;