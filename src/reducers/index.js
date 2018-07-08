import authedUser from './authedUser';
import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';

export default combineReducers({
    authedUser,
    users,
    questions,
});