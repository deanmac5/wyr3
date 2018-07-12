import { REMOVE_AUTHED_USER } from '../actions/authedUser';
import { SET_AUTHED_USER } from '../actions/authedUser';

export default function authedUser(state = {}, action) {
    switch (action.type) {
        case (SET_AUTHED_USER):
            return action.id;
        case (REMOVE_AUTHED_USER):
            return ''
        default:
            return state;
    }
}