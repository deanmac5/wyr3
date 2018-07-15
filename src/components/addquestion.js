import React, { Component } from 'react';

import { connect } from 'react-redux';

class AddQuestion extends Component {
  render() {
    const { authedUser } = this.props;

    return (
      <div>
        <h2>AddQuestion</h2>
        <form>
          <input value="optionOne" type="text" />
          <input value="optionTwo" type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(AddQuestion);
