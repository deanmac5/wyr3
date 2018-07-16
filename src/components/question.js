import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Question extends Component {
  
    render() {
        const { question } = this.props;

        if (question === null) {
            return <p>That question does not exist</p>
        }
        
        const {id, author, timestamp, optionOne, optionTwo} = question; 

        return (
            <Link to={`/questions/${id}`}>
            <div>
                <p>{author}</p>
                <p>{timestamp}</p>
                <p>{optionOne.text}</p>
                <p>{optionTwo.text}</p>
            </div>
            </Link>
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