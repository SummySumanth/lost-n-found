import signupPageActionTypes from './signupPageActionTypes';
import { AuthActions } from '../auth/auth';

import {signup} from '../../services/signup/signup'
const singupPageActions = {
    usernameInputHandler : payload => ({type: signupPageActionTypes.USERNAME_INPUT, payload}),
    passwordInputHandler : payload => ({type: signupPageActionTypes.PASSWORD_INPUT, payload}),
    submit: payload => (dispatch) => {
        signup(payload).then(response => {
            dispatch(AuthActions.tokenReceived(response));
        });
    }
}

export default singupPageActions;