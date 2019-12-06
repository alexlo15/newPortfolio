import React, { Component } from 'react';
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import RandomFact from "../Components/RandomFact";
import SkillOrbit from "../Components/SkillsOrbit/Orbit";
import Ticker from "../Components/Ticker/Ticker";
import RandomJoke from '../Components/RandomJoke';

class Home extends Component {

    render() {
        return (
            <div className="body">
                <Navbar />
                <div className="row"><br></br><br></br></div>
                <div className="row">
                    <div className="col=12 col-sm-12 col-lg-4">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-3"></div>
                            <div className="col-12 col-sm-12 col-lg-6"><h1>Alex Lo</h1></div>
                            <div className="col-12 col-sm-12 col-lg-3"></div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-2"></div>
                            <div className="col-12 col-sm-12 col-lg-8">
                                <br></br>
                                <h2 id="titleBorder">Full-Stack</h2>
                                <h2>Web Developer</h2>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-2"></div>
                        </div>
                        <br></br>
                    </div>
                    <div className="col=12 col-sm-12 col-lg-4 picContainer">
                        <br></br>
                        <img id="bioPic" alt="my ugly mug" src={require("../Images/me.jpg")} />
                        <br></br>
                    </div>
                    <div className="col=12 col-sm-12 col-lg-3">
                        <br></br>
                        <div id="squigglyborder">
                            <div id="DYK"><h3>Did you know?</h3></div>
                            <br></br>
                            <div id="fact"><RandomFact /></div>
                            <br></br>
                            <h3 id="afterThought">...I certainly didn't!</h3>
                        </div>
                        <br></br>
                        <div id="squigglyborder">
                            <div id="DYK"><h3>Heard this one??</h3></div>
                            <br></br>
                            <div id="joke"><RandomJoke /></div>
                            <br></br>
                            <h3 id="afterThought">...LOL!</h3>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <Ticker />
                {/* ///////////////////////////////////////// */}

                <div className="parallax"></div>

                {/* ///////////////////////////////////////// */}
                <br></br><br></br>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4"></div>
                    <div className="col-12 col-sm-12 col-lg-4 bioParagraph">
                        <SkillOrbit />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4"></div>
                </div>
                <br></br><br></br>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-6 techParagraph">
                        <h3>&nbsp; Front-end Technologies</h3>
                        <li><strong>React.JS</strong></li>
                        <li><strong>Angular.JS</strong></li>
                        <li><strong>HTML5/CSS3</strong></li>
                        <li><strong>JavaScript</strong></li>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6 techParagraph">
                        <h3>&nbsp; Back-end Technologies</h3>
                        <li><strong>Node.JS</strong></li>
                        <li><strong>Express</strong></li>
                        <li><strong>MongoDB</strong></li>
                        <li><strong>MySQL</strong></li>
                    </div>
                </div>
                <br></br>
                <br></br>


                {/* ///////////////////////////////////////// */}

                <div className="parallax"></div>

                {/* ///////////////////////////////////////// */}
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-2"></div>
                    <div className="col-12 col-sm-12 col-lg-8 bioParagraph" id="squigglyborder"><h2>Sites and Applications:</h2></div>
                    <div className="col-12 col-sm-12 col-lg-2"></div>
                </div>
                <br></br>
                {/* start of portfolio  */}
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-12 container">
                        <p className="portPics">
                            <a href="https://alexlo15.github.io/Project1/" target="_blank">
                                <img className="pic" src={require("../Images/notify.jpg")} />
                            </a>
                        </p>
                        <div className="overlay">
                            <p>
                                <a href="https://alexlo15.github.io/Project1/" className="text" target="_blank">
                                    Notify (Deployed)
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/Project1" className="description" target="_blank">
                                    A spotify-esque music search and player featuring themes and event listings
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/Project1" className="tools" target="_blank">
                                    Built with: HTML, JavaScript, jQuery, Ajax, Bootstrap
                            </a>
                            </p>
                        </div>
                    </div>
                    {/* End of portfolio piece */}
                    <div className="col-12 col-sm-12 col-lg-12 container">
                        <p className="portPics">
                            <a href="https://alexlo15.github.io/guildguessreact/" target="_blank">
                                <img className="pic" src={require("../Images/guildguess.JPG")} />
                            </a>
                        </p>
                        <div className="overlay">
                            <p>
                                <a href="https://alexlo15.github.io/guildguessreact/" className="text" target="_blank">
                                    Guild Guess (Deployed)
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/guildguessreact" className="description" target="_blank">
                                    A memory game where the user can't click the same thing twice
                                </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/guildguessreact" className="tools" target="_blank">
                                    Built with: React, JavaScript, Bootstrap, Node.JS
                                 </a>
                            </p>
                        </div>
                    </div>
                    {/* End of portfolio piece */}
                    <div className="col-12 col-sm-12 col-lg-12 container">
                        <p className="portPics">
                            <a href="https://alexlo15.github.io/Magic/" target="_blank">
                                <img className="pic" src={require("../Images/wedh.JPG")} />
                            </a>
                        </p>
                        <div className="overlay">
                            <p>
                                <a href="https://we-dh.herokuapp.com/" className="text" target="_blank">
                                    W-EDH (Deployed)
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/Magic" className="description" target="_blank">
                                    A Magic the Gathering TCG resource featuring card search, decklists, and quizzes.
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/Magic" className="tools" target="_blank">
                                    Built with: MERN Stack
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* End of portfolio piece */}
                    <div className="col-12 col-sm-12 col-lg-12 container">
                        <p className="portPics">
                            <a href="https://alexlo15.github.io/nevergifup/" target="_blank">
                                <img className="pic" src={require("../Images/nbagif.JPG")} />
                            </a>
                        </p>
                        <div className="overlay">
                            <p>
                                <a href="https://alexlo15.github.io/nevergifup/" className="text" target="_blank">
                                    NBA GIF Search (Deployed)
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/nevergifup" className="description" target="_blank">
                                    NBA themed GIF search page
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/nevergifup" className="tools" target="_blank">
                                    Built with: HTML, CSS, JavaScript, jQuery, Ajax
                            </a>
                            </p>
                        </div>
                    </div>
                    {/* End of portfolio piece */}
                    <div className="col-12 col-sm-12 col-lg-12 container">
                        <p className="portPics">
                            <a href="https://ruproject2.herokuapp.com/" target="_blank">
                                <img className="pic" src={require("../Images/trivia.JPG")} />
                            </a>
                        </p>
                        <div className="overlay">
                            <p>
                                <a href="https://ruproject2.herokuapp.com/" className="text" target="_blank">
                                    Knode Your Code proj 2 version (Deployed)
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/project2" className="description" target="_blank">
                                    A code learning resource built as our group project
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/project2" className="tools" target="_blank">
                                    Built with: JavaScript, Sequelize, mySQL, Node, Bootstrap
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* End of portfolio piece */}
                    <div className="col-12 col-sm-12 col-lg-12 container">
                        <p className="portPics">
                            <a href="https://knodeyourcode-react.herokuapp.com/" target="_blank">
                                <img className="pic" src={require("../Images/KYC.JPG")} />
                            </a>
                        </p>
                        <div className="overlay">
                            <p>
                                <a href="https://knodeyourcode-react.herokuapp.com/" className="text" target="_blank">
                                    Knode Your Code final project (Deployed)
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/knodeyacode" className="description" target="_blank">
                                    The final project version of "KYC", as a MERN stack application
                            </a>
                            </p>
                            <p>
                                <a href="https://github.com/alexlo15/knodeyacode" className="tools" target="_blank">
                                    Built with: MongoDB, Firebase, NodeJS, Express, ReactJS
                            </a>
                            </p>
                        </div>
                    </div>
                    {/* End of portfolio piece */}
                </div>

                <div className="parallax"></div>

                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-12 col-sm-12 col-lg-4 endParagraph">
                        Thanks for making it to the end!
                        Feel free to reach me at any of my links in the NavBar or below.
                    </div>
                </div>

            </div>
        )
    }

};

export default Home;
