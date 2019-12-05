import React, { Component } from 'react';

class RandomFact extends Component {

    componentDidMount = () => {
        this.getRandomFact();
    };

    getRandomFact = () => {
        let apiCall = new XMLHttpRequest();
        apiCall.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                let shortRes = this.responseText.substr(1, this.responseText.length - 69)
                document.getElementById("fact").innerHTML = shortRes
            }
        }

        apiCall.open("GET", "https://uselessfacts.jsph.pl/random.txt?language=en", true);
        apiCall.send();
    };

    render() {
        return (
            <div></div>
        );
    }
};

export default RandomFact;