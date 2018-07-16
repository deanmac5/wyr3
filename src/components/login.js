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
            <div align="center">
                <h1>Please login</h1>
                <ul>
                {users.map(u => <li key={u.id} onClick={(e) => this.handleClick(e, u.id)}>{u.name}</li>)} 
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}
export default connect(mapStateToProps)(Login);
