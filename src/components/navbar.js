import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleLogout = (e, id) => {
    e.preventDefault();
    this.props.dispatch(removeAuthedUser(id))
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { authedUser } = this.props

    return (
      <Menu>
        <Menu.Item
          name='Home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Would You Rather
        </Menu.Item>
        <Menu.Item
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        >
          <Link to="/">Dashboard</Link>
        </Menu.Item>

        <Menu.Item name='leaderboard' active={activeItem === 'leaderboard'} onClick={this.handleItemClick}>
          <Link to="/leaderboard">Leaderboard</Link>
        </Menu.Item>

        <Menu.Item
          name='add'
          active={activeItem === 'add'}
          onClick={this.handleItemClick}
        >
          <Link to="/add">Add new question</Link>
        </Menu.Item>

        <Menu.Item position="right"
          name='user'
        >
          Currently logged in as {Object.values(authedUser)}
        </Menu.Item>

        <Menu.Item position="right"
          name='logout'
          onClick={(e) => this.handleLogout(e)}
        >
          Log out
        </Menu.Item>
      </Menu>
    )
  }
}

function mapStateToProps({ authedUser }) {

  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Navbar);