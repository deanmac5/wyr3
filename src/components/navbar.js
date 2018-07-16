import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser';

class Navbar extends Component {

  handleClick = (e, id) => {
    e.preventDefault();
 
    this.props.dispatch(removeAuthedUser(id))
  }


  render() {
    const { authedUser } = this.props
    return (
      <div>
        <h2>Navbar: {authedUser}</h2>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/add">Add new question</Link></li>

        </ul>
        <button onClick={(e) => this.handleClick(e)}>Log out</button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  const user = authedUser ? Object.values(authedUser) : null
  return {
    authedUser: user
  }
}

export default connect(mapStateToProps)(Navbar);
