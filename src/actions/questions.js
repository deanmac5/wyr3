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

export function handleAdd ({ author, optionOneText, optionTwoText }) {
  console.log("Inside handleAdd");
  return (dispatch) => dispatch(saveQuestion({
      author,
      optionOneText,
      optionTwoText,
    }))
  

}

export function saveQuestion({ author, optionOneText, optionTwoText }) {
  console.log("Inside saveQuestion");
  return (dispatch) => {
    _saveQuestion({
      author,
      optionOneText,
      optionTwoText
    }).then((question) => dispatch(addQuestion(question)))
  }
}


export function answerQuestion(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info))

    return _saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAnswer: ', e)
        alert('There was an error answering the question.');
      })
  }
}