import { receiveQuestions, recordAnswerQuestion } from '../actions/questions'
import { receiveUsers, updateUserAnswer } from '../actions/users';

import { getInitialData } from '../utils/api';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = null

export function handleInitialData () {
  return (dispatch) => {
    
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}

export function recordQuestionVote (data){
  return (dispatch) => {
    dispatch(updateUserAnswer(data))
    dispatch(recordAnswerQuestion(data))
  }
}