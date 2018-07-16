import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function answerQuestion({qid, authedUser, answer}) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer
  }
}

export function recordAdd({ author, optionOneText, optionTwoText }) {
  return (dispatch) => dispatch(saveQuestion({
    author,
    optionOneText,
    optionTwoText,
  }))
}

export function saveQuestion({ author, optionOneText, optionTwoText }) {
  return (dispatch) => {
    _saveQuestion({
      author,
      optionOneText,
      optionTwoText
    }).then((question) => dispatch(addQuestion(question)))
  }
}


export function recordAnswerQuestion( data ) {
return (dispatch) => {
    dispatch(answerQuestion(data))
    return(_saveQuestionAnswer(data))
  }
}



