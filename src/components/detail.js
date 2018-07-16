import { Button, Card, Container, Form, Image, Radio, Select } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { recordQuestionVote } from '../actions/shared';

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAnswer: 'optionOne' // default option
    }
  }

  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toDateString();
  }


  changeAnswer(e, val) {
    e.preventDefault();
    this.setState({ selectedAnswer: val });
  }

  handleQuestionAnswer = (e) => {
    e.preventDefault()
    const { dispatch, user, id } = this.props
    dispatch(recordQuestionVote({
      qid: id,
      authedUser: user,
      answer: this.state.selectedAnswer,
    }))
  }

  showForm() {
    const { question, user } = this.props
    const option1 = Object.keys(question).filter(answer => answer === 'optionOne')
    const option2 = Object.keys(question).filter(answer => answer === 'optionTwo')

    return user
      ? question.optionOne.votes.includes(user.toString()) ||
        question.optionTwo.votes.includes(user.toString())
        ? <div>
            <div>
              <p>{question.optionOne.text}</p>
          </div>
          <div>
            <p>{question.optionTwo.text}</p>
          </div>
        </div>
        : <Container>
          <Form onSubmit={this.handleQuestionAnswer}>
            <Form.Group>
              
              <Form.Field
                control={Radio}
                label={question.optionOne.text}
                value='optionOne'
                checked={this.state.selectedAnswer==='optionOne'}
                onChange={(e) => this.changeAnswer(e, 'optionOne')}
              />
              <Form.Field
                control={Radio}
                label={question.optionTwo.text}
                value='optionTwo'
                checked={this.state.selectedAnswer==='optionTwo'}
                onChange={(e) => this.changeAnswer(e, 'optionTwo')}
              />


              {/* <select
                        onChange={(e) => this.changeAnswer(e)}
                        defaultValue='Select an answer'>
                        <option value='Select an answer' disabled hidden>Select an answer</option>
                        <option value={option1}>{question.optionOne.text}</option>
                        <option value={option2}>{question.optionTwo.text}</option>
                      </select> */}
            </Form.Group>
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </Container>
      : null
  }

  render() {
    const { author, users, question } = this.props
    return (
      <div>
        {author === null
          ? <Redirect to='/login' />
          : <Container>
            <Card fluid>
              <Card.Content>
                <Image floated='left' size='mini' src={users[author].avatarURL} />
                <Card.Header>{users[author].name}</Card.Header>
                <Card.Meta>asked on {this.formatTimestamp(question.timestamp)}</Card.Meta>
                <Card.Description>
                  Would you rather:
                  {this.showForm()}
                </Card.Description>
              </Card.Content>
            </Card>
          </Container>
         

          // <div>
          //   <h1>WOULD YOU RATHER</h1>
          //   {this.showForm()}
          // </div>

        }
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params
  const questionId = questions[id]

  return {
    id,
    author: questionId ? questionId.author : null,
    question: questionId,
    user: authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Detail)
