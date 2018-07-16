import { Container, Header } from 'semantic-ui-react';
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
                <ul>
                {users.map(u => <li key={u.id} onClick={(e) => this.handleClick(e, u.id)}>{u.name}</li>)} 
                </ul>
            </Container>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}
export default connect(mapStateToProps)(Login);
