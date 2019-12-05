import React, { Component } from 'react';
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import RandomFact from "../Components/RandomFact";

class Home extends Component {

    render() {
        return (
            <>
                <Navbar />
                <br></br>
                <div className="row">
                    <div className="col=12 col-sm-12 col-lg-6">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-3"></div>
                            <div className="col-12 col-sm-12 col-lg-6"><h1>Alex Lo</h1></div>
                            <div className="col-12 col-sm-12 col-lg-3"></div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-2"></div>
                            <div className="col-12 col-sm-12 col-lg-8">
                                <h2>Full-Stack</h2>
                                <h2>Web Developer</h2>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-2"></div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-2"></div>
                            <div className="col-12 col-sm-12 col-lg-8">
                                <div id="randomFactArea">
                                    <div id="DYK"><h3>Did you know?</h3></div>
                                    <br></br>
                                    <div id="fact"><RandomFact /></div>
                                    <br></br>
                                    <h3 id="afterThought">...I certainly didn't!</h3>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-2"></div>
                        </div>
                    </div>
                    <div className="col=12 col-sm-12 col-lg-6">
                        <div className="picContainer">
                            <img id="bioPic" alt="my ugly mug" src={require("../Images/me.jpg")} />
                        </div>
                        <br></br>
                    </div>

                </div>


                {/* <p>
                    Thank you for visiting my Portfolio page!
                    I'm Alex Lo, a Full Stack Web Developer,
                    looking to take my career to the next level.
                    I love making crisp clean web pages while
                    challenging myself to balance simplicity and
                    creativity. Scroll down to see some of my work.
                             </p> */}
                {/* ///////////////////////////////////////// */}

                <div className="parallax"></div>

                {/* ///////////////////////////////////////// */}
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4"></div>
                    <div className="col-12 col-sm-12 col-lg-12 bioParagraph">
                        <h3>Thank you for visiting my Portfolio page!
                       I'm Alex Lo, a Full Stack Web Developer,
                       looking to take my career to the next level.
                       I love making crisp clean web pages while
                       challenging myself to balance simplicity and
                       creativity. Scroll down to see some of my work.</h3>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-12"></div>
                </div>
                {/* ///////////////////////////////////////// */}

                <div className="parallax"></div>

                {/* ///////////////////////////////////////// */}
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-2"></div>
                    <div className="col-12 col-sm-12 col-lg-8 bioParagraph"><h2>Sites and Applications:</h2></div>
                    <div className="col-12 col-sm-12 col-lg-2"></div>
                </div>

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

            </>
        )
    }

};

export default Home;
