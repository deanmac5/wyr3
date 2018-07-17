import { Container, Tab } from 'semantic-ui-react';
import React, { Component } from 'react';

import Answered from './answered';
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
        (<div>
          {<Question id={id}/>}
        </div>))
      : null
  }

  showAnswered() {
    const { answeredIds } = this.props;
  
    return answeredIds
    ? answeredIds.map(id =>
      (<div>
        {<Answered id={id}/>}
      </div>))
    : null
  }


  render() {
    const panes = [
      { menuItem: 'Unanswered', render: () => <Tab.Pane>{this.showUnanswered()}</Tab.Pane> },
      { menuItem: 'Answered', render: () => <Tab.Pane>{this.showAnswered()}</Tab.Pane> },
    
    ]
   
    return (
      <Container>
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </Container>
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
