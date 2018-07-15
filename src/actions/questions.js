import { _saveQuestionAnswer } from '../utils/_DATA.js';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function answerQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer
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