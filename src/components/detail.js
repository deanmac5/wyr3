import React, { Component } from 'react';

import { connect } from 'react-redux';
import { saveVote } from '../actions/shared';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ''
    }
  }

  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toTimeString();
  }

  handleAnswer = (e, value) => {
    e.preventDefault();
    const {dispatch, authedUser, id } = this.props;
    console.log("Click: " + value)
    // dispatch(saveVote({
    //   id,
    //   authedUser: authedUser.toString(),
    //   answer: this.state.answer
    // }))
  }

  render() {
    const { question, authedUser, users } = this.props

    return (

      <div>
        <p>Authed: {authedUser}</p>
        <p>{users[question.author].name}</p>
        <img src={users[question.author].avatarURL} alt={users[question.author].name}/>
        <p>{this.formatTimestamp(question.timestamp)}</p>
        <h2>Would You Rather:</h2>
        {/* <button onClick={(e) => this.toggleAnswers(e)}>Toggle</button> */}
      
        <button onClick={(e) => this.handleAnswer(e, 1)}>{question.optionOne.text}</button>
        <p>OR</p>
        <button onClick={(e) => this.handleAnswer(e, 2)}>{question.optionTwo.text}</button>
      
      </div>

    )

  }
}

function mapStateToProps({ questions, authedUser, users }, props) {

  const { id } = props.match.params;
  const questionId = questions[id];

  return {
    id,
    question: questionId,
    authedUser,
    users,
  }
}



export default connect(mapStateToProps)(Detail);