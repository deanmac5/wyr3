import { Card, Container, Header, Icon, Image } from 'semantic-ui-react';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {

    handleClick = (e, id) => {
        e.preventDefault();

        this.props.dispatch(setAuthedUser(id))
    }

    render() {
        const { users } = this.props;

        return (

            <Container>
                <div></div>
                <Header as='h2' color='teal' textAlign='center'>Please login</Header>
                <Card.Group>
                    {users.map(u =>
                        <Card onClick={(e) => this.handleClick(e, u.id)}>
                            <Image src={u.avatarURL} />
                            <Card.Content>
                                <Card.Header>{u.name} {u.id}</Card.Header>
                            </Card.Content>

                        </Card>
                    )
                    }
                </Card.Group>
            </Container>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}
export default connect(mapStateToProps)(Login);
