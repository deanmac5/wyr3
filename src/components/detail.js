import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { recordQuestionVote } from '../actions/shared';

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAnswer: 'optionOne' // default option
    }
  }

  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toTimeString();
  }

//   checkAnswerLength(option) {
//     const { question } = this.props
//     const totalLength = question.optionOne.votes.length + question.optionTwo.votes.length
//     return  <p>
//               {`${option.votes.length} vote(s) | ${option.votes.length*100/totalLength}%`}
//             </p>
//   }

  changeAnswer(e) {
    this.setState({ selectedAnswer: e.target.value });
  }

  handleQuestionAnswer = (e) => {
    e.preventDefault()
    const { dispatch, user, id } = this.props
    dispatch(recordQuestionVote({
      qid: id,
      authedUser: user,
      answer: this.state.selectedAnswer,
    }))
  }

  showForm() {
    const { question, user } = this.props
    const option1 = Object.keys(question).filter(answer => answer === 'optionOne')
    const option2 = Object.keys(question).filter(answer => answer === 'optionTwo')

    return user 
            ?  question.optionOne.votes.includes(user.toString()) ||
               question.optionTwo.votes.includes(user.toString())
                ? <div>
                    <div>
                      <p>{question.optionOne.text}</p>
             
                    </div>
                    <div>
                      <p>{question.optionTwo.text}</p>
                   
                    </div>
                  </div>
                : <div>
                    <form onSubmit={this.handleQuestionAnswer}>
                      <select
                        onChange={this.changeAnswer}
                        defaultValue='Select an answer'>
                        <option value='Select an answer' disabled hidden>Select an answer</option>
                        <option value={option1}>{question.optionOne.text}</option>
                        <option value={option2}>{question.optionTwo.text}</option>
                      </select>
                      <input type="submit" value="Submit" />
                    </form>
                  </div>
              : null
  }

  render() {
    const { author, users, question } = this.props
    return (
      <div>
      { author === null
          ? <Redirect to='/login' />
          : <div className='question-detail-link'>
              <Link to='/dashboard'>
              
                Back
              </Link>
              <div>
                <div>
                  <img src={users[author].avatarURL} alt={users[author].name}/>
                  <div>
                    <p>{users[author].name}</p>
                    <p>{this.formatTimestamp(question.timestamp)}</p>
                  </div>
                  <div>
            
                  </div>
                </div>
                <div>
                  <h1>WOULD YOU RATHER</h1>
                </div>
                {this.showForm()}
              </div>
            </div> }
      </div>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser }, props) {
  const { id } = props.match.params
  const questionId = questions[id]

  return {
    id,
    author: questionId ? questionId.author : null,
    question: questionId,
    user: authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Detail)
