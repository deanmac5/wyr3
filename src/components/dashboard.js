import React, { Component, Fragment } from 'react';

import Question from './question';
import { connect } from 'react-redux';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { showAnswered: false }
  }

  toggleAnswers = (e) => {
    e.preventDefault();
    this.setState({
      showAnswered: !this.state.showAnswered
    })
  }

  showUnanswered() {
    const { questionIds, answeredIds } = this.props;
    
    return answeredIds
      ? questionIds
        .filter(id => !answeredIds.includes(id))
        .map(id =>
        (<li key={id}>
          {<Question id={id}/>}
        </li>))
      : null
  }

  showAnswered() {
    const { answeredIds } = this.props;
  
    return answeredIds
    ? answeredIds.map(id =>
      (<li key={id}>
        {<Question id={id}/>}
      </li>))
    : null
  }


  render() {
   
    return (
      <Fragment>
        {this.state.showAnswered 
          ? <h3>Answered</h3>
          : <h3>Unanswered</h3>
        }
        {this.state.showAnswered
          ? this.showAnswered()
          : this.showUnanswered()
        }



        <button onClick={(e) => this.toggleAnswers(e)}>Toggle</button>


      </Fragment>

    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const user = authedUser ? users[authedUser] : null
  const answered = user ? user.answers : null

  return {
    questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredIds: answered ? Object.keys(answered).sort((a, b) => questions[b].timestamp - questions[a].timestamp) : null
  }
}

export default connect(mapStateToProps)(Dashboard);
