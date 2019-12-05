import React, { Component } from 'react';

class RandomFact extends Component {

    componentDidMount = () => {
        this.getRandomFact();
    };

    getRandomFact = () => {
        let apiCall = new XMLHttpRequest();
        apiCall.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("fact").innerHTML =
                    this.responseText;
            }
        }

        apiCall.open("GET", "https://uselessfacts.jsph.pl/random.txt?language=en", true);
        apiCall.send();
    };

    render(){
        return(
            <div></div>
        );
    }
};

export default RandomFact;