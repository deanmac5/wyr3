import React, { Component } from 'react';

import { SET_AUTHED_USER } from '../actions/authedUser';
import User from './user';
import { connect } from 'react-redux';

class Login extends Component {



    render() {
        return (
            <div align="center">
                <h1>Please login</h1>
                {/* <ul>
                    {this.props.userIds.map((id) => (
                        <li className="no-bullets"
                            key={id}>
                            <div>
                                <User id={id} />
                            </div>
                        </li>
                    ))}
                </ul> */}
            </div>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(Login);
