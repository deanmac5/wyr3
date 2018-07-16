import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER';


export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateAnswer ({qid, authedUser, answer}) {
  return {
    type: UPDATE_ANSWER,
    id: qid,
    authedUser,
    answer
  }
}

export function updateUserAnswer ( data )  {
  const {qid, authedUser, answer } = data
  return (dispatch) => {
    dispatch(updateAnswer(data))
    return _saveQuestionAnswer(data)
  }
}