import React, { Component } from 'react';

import { connect } from 'react-redux';

class Question extends Component {
    render() {
        const { question } = this.props;

        if (question === null) {
            return <p>That question does not exist</p>
        }

        console.log(this.props);
        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, {id}){
    const question = questions[id];
    return {
        authedUser,
        question: question
    }
}


export default connect(mapStateToProps)(Question);