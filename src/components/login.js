import React, { Component } from 'react';

import { SET_AUTHED_USER } from '../actions/authedUser';
import User from './user';
import { connect } from 'react-redux';

class Login extends Component {



    render() {
        const { users } = this.props
        console.log("here: " + users)
        
        return (
            <div align="center">
                <h1>Please login</h1>
                <ul>
                {users.map(u => <li key={u.id}> name={u.name} </li>)} 
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
