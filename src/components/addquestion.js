import { Button, Container, Form, Message } from 'semantic-ui-react';
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
    if (id === 1) {
      this.setState({
        option1: e.target.value
      })
    }
    else {
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
    if (this.state.saved) {
      return <Redirect to='/' />
    }

    return (
      <Container>
        <Message info>
    <Message.Header>Make your own question</Message.Header>
    <p>Would you rather...</p>
  </Message>
        <Form onSubmit={this.saveValues}>
      
          <Form.Field>
            <label>Option one:</label>
            <input placeholder='Option one' value={this.state.option1} onChange={(e) => this.addValue(e, 1)} />
          </Form.Field>
          <Form.Field>
            <label>Option two:</label>
            <input placeholder='Option two' value={this.state.option2} onChange={(e) => this.addValue(e, 2)} />
          </Form.Field>

          <Button type='submit'>Submit</Button>
        </Form>
      </Container>

    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(AddQuestion);