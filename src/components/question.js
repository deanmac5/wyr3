import { Card, Image } from 'semantic-ui-react';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Question extends Component {

    render() {
        const { question } = this.props;

        if (question === null) {
            return <p>That question does not exist</p>
        }

        const { id, author, timestamp, optionOne, optionTwo } = question;
        const { users } = this.props;
        console.log("hope: " + users[author].name)

        return (
            <Link to={`/questions/${id}`}>
                <Card>
                    <Card.Content>
                        <Image floated='right' size='mini' src={users[author].avatarURL} />
                        <Card.Header>{users[author].name}</Card.Header>
                        <Card.Meta>{timestamp}</Card.Meta>
                        <Card.Description>
                            {optionOne.text}
                            {optionTwo.text}
                        </Card.Description>
                    </Card.Content>

                </Card>
            </Link>
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


export default connect(mapStateToProps)(Question);