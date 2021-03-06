import React, { Component } from "react";
import "./Orbit.css";
class SkillOrbit extends Component {

    render() {
        return (
            // the galaxy
            <div className="wholeOrbit">
                <div className="system-sun">

                    {/* each individual planet */}
                    <div className="system-css">
                        <img alt="" className="planet" src={require("../../Images/css.png")} />
                    </div>

                    <div className="system-html">
                        <img alt="" className="planet" src={require("../../Images/html5.png")} />
                    </div>

                    <div className="system-react">
                        <img alt="" className="reactplanet" src={require("../../Images/react.svg")} />
                    </div>

                    <div className="system-node">
                        <img alt="" className="squareplanet" src={require("../../Images/download.jpg")} />
                    </div>

                    <div className="system-js">
                        <img alt="" className="squareplanet" src={require("../../Images/javascript.png")} />
                    </div>

                    <div className="system-mongo">
                        <img alt="" className="squareplanet" src={require("../../Images/mongo.png")} />
                    </div>

                    <div className="system-sql">
                        <img alt="" className="reactplanet" src={require("../../Images/mysql.png")} />
                    </div>
                    
                    <div className="system-angular">
                        <img alt="" className="reactplanet" src={require("../../Images/angular.png")} />
                    </div>

                    {/* the sun the rotate around */}
                    <div class="skillPlanetMain">
                        <h3 id="skillText"><strong>Skills</strong></h3>
                    </div>

                </div>
            </div>
        );
    }

};

export default SkillOrbit;
