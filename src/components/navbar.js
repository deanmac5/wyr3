import React, { Component } from 'react';

import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
      const { authedUser } = this.props
      return (
       <h2>Navbar: {authedUser}</h2>
      )
    }
  }

  function mapStateToProps({ authedUser }){
    return {
      authedUser: Object.values(authedUser)
    }
  }
  
  export default connect(mapStateToProps)(Navbar);
