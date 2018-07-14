import React, { Component } from 'react';

import Question from './question';
import { connect } from 'react-redux';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {showAnswered: false}
  }

  toggleAnswers = (e) => {
    e.preventDefault();
    this.setState({
      showAnswered: !this.state.showAnswered
    })
  }

  showUnanswered() {
    const { questionIds } = this.props;
    return questionIds ? questionIds.map(id => {
      <li key={id}>
      <Question id={id} /> 
    </li>
    })
    : null

  }


  render() {
    console.log("Toggle for show answers is: " + this.state.showAnswered);
    return (
      <div>
        {this.state.showAnswered 
        ? <h3>Answered</h3>
        : <div><h3>Unanswered</h3> {this.showUnanswered()}</div>}

        <button onClick={(e) =>this.toggleAnswers(e)}>Toggle</button>
       

      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const answers = authedUser ? users[authedUser] : null
  if(answers !== undefined){
  console.log("**" + Object.values(answers))
  }
  // const answered = users[authedUser].answers

  return {
    questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    // answeredIds: Object.keys(answered).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);
