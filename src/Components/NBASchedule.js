import React, { Component } from 'react';

class NBASchedule extends Component {

    componentDidMount = () => {
        this.getNBASched();
    };

    

    getNBASched = () => {
        let apiCall = new XMLHttpRequest();
        apiCall.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                // let shortRes = this.responseText.substr(1, this.responseText.length - 69)
                document.getElementById("nba").innerHTML = this.responseText
            }
        }

        apiCall.open("GET", "https://geek-jokes.sameerkumar.website/api", true);
        apiCall.send();
    };

    render() {
        return (
            <div></div>
        );
    }
};

export default NBASchedule;