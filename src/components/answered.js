import { Card, Image, Message } from 'semantic-ui-react';
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Answered extends Component {

    formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toDateString();
    }

    getStats(option) {
        const { question } = this.props
        const totalLength = question.optionOne.votes.length + question.optionTwo.votes.length
        return (
            <Fragment>
        <p>
            {` has ${option.votes.length} vote(s)`}
        </p>
            <p>
                {` which is ${option.votes.length * 100 / totalLength}%`}
            </p>
            </Fragment>)
      }

    render() {
        const { question } = this.props;

        if (question === null) {
            return <p>That question does not exist</p>
        }

        const { id, author, timestamp, optionOne, optionTwo } = question;
        const { users, authedUser } = this.props;

        return (

            <Card.Group>
                <Card color='green'>
                    <Card.Content>
                        <Image floated='right' size='mini' src={users[author].avatarURL} />
                        <Card.Header>{users[author].name}</Card.Header>
                        <Card.Description>
                            {optionOne.text}  {this.getStats(optionOne)}
                        </Card.Description>
                        <Card.Description align='center'>
                            or
                            </Card.Description>
                        <Card.Description>
                            {optionTwo.text}  {this.getStats(optionTwo)}
                        </Card.Description>
                        <Card.Meta>You answered with:</Card.Meta>

                        {users[authedUser].answers[id] === 'optionOne'
                            ?
                            <Card.Description>
                                <Message positive>
                                    <Message.Header>{optionOne.text}</Message.Header>

                                </Message>
                            </Card.Description>
                            :
                            <Card.Description>
                                <Message positive>
                                    <Message.Header>{optionTwo.text}</Message.Header>

                                </Message>
                            </Card.Description>
                        }
                    </Card.Content>

                </Card>
            </Card.Group>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
    const question = questions[id];
    return {
        authedUser,
        question: question,
        users,
    }
}


export default connect(mapStateToProps)(Answered);