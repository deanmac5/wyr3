import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { recordAdd } from '../actions/questions';

class AddQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      option1: '',
      option2: '',
      saved: false
    }
  }

  addValue(e, id) {
    if(id === 1){
    this.setState({
      option1: e.target.value
    })}
    else{
      this.setState({
        option2: e.target.value
      })
    }
  }

  saveValues = (e) => {
    e.preventDefault();
 
    this.props.dispatch(recordAdd({
      author: this.props.authedUser,
      optionOneText: this.state.option1,
      optionTwoText: this.state.option2
    }))
    this.setState({
      saved: true
    })
  } 

  render() {
    if(this.state.saved){
      return <Redirect to='/'/>
    }

    return (
      <div>
        <h2>AddQuestion</h2>
        <form onSubmit={this.saveValues}>
          <input value={this.state.option1} type="text" onChange={(e) => this.addValue(e, 1)}/> 
          <p>OR</p>
          <input value={this.state.option2} type="text" onChange={(e) => this.addValue(e, 2)}/>
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