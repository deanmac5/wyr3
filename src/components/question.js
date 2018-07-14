import React, { Component } from 'react';

import { connect } from 'react-redux';

class Question extends Component {
    toAnswer = (e, id) => {
        e.preventDefault()
        // todo: handleAnswer 
        // might just need to route to an answer detail page
    }

    render() {
        const { question } = this.props;

        if (question === null) {
            return <p>That question does not exist</p>
        }
        console.log("*****" + Object.values(question.optionOne));
        const {id, author, timestamp, optionOne, optionTwo} = question; // what question attributes do we want to display?

        console.log(this.props);
        return (
            <div>
                <button onClick={(e) => this.toAnswer(e, {id})}>{id}</button>
                <p>{author}</p>
                <p>{timestamp}</p>
                <p>{optionOne.text}</p>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, questions}, {id}){
    const question = questions[id];
    return {
        authedUser,
        question: question
    }
}


export default connect(mapStateToProps)(Question);