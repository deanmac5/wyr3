import React, { Component } from 'react';

import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser';

class Navbar extends Component {

  handleClick = (e, id) => {
    e.preventDefault();
    console.log("Button clicked: " + id)
    this.props.dispatch(removeAuthedUser(id))
}


    render() {
      const { authedUser } = this.props
      return (
        <div>
       <h2>Navbar: {authedUser}</h2>
       <button onClick={(e) => this.handleClick(e)}>Log out</button>
       </div>
      )
    }
  }

  function mapStateToProps({ authedUser }){
    return {
      authedUser: Object.values(authedUser)
    }
  }
  
  export default connect(mapStateToProps)(Navbar);
