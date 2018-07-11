import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

    case ANSWER_QUESTION :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          // todo: refer lesson7 part 11
        }
      }
    default :
      return state
  }
}