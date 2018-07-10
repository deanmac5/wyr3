import React, { Component } from 'react';

import Question from './question';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    
    return (
      <div>
        <h3>Questions</h3>
        <ul>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <Question id={id} /> 
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);
