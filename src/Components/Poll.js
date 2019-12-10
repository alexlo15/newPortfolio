import React, { Component } from 'react';
import Poll from 'react-polls';
 
// Declaring poll question and answers
const pollQuestion = 'Have you been to 5 different countries?'
const pollAnswers = [
  { option: 'Yes', votes: 1 },
  { option: 'No', votes: 1 }
]
const customStyles= {
    questionColor: "azure",
}
class PollComponent extends Component {
  // Setting answers to state to reload the component with each vote
  state = {
    pollAnswers: [...pollAnswers]
  }
 
  // Handling user vote
  // Increments the votes count of answer when the user votes
  handleVote = voteAnswer => {
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }
 
  render () {
    const { pollAnswers } = this.state
    return (
      <div>
        <Poll customStyles={customStyles} question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
      </div>
    );
  }
};

export default PollComponent;