import signupPageActionTypes from './signupPageActionTypes';
import { AuthActions } from '../auth/auth';
import history from '../../routes/history';
import {signup} from '../../services/signup/signup'
import tokenVC from '../../services/tokenValidityChecker/tokenValidityChecker';

import AxiosConfig from '../../config/axiosServices';

const singupPageActions = {
    usernameInputHandler : payload => ({type: signupPageActionTypes.USERNAME_INPUT, payload}),
    passwordInputHandler : payload => ({type: signupPageActionTypes.PASSWORD_INPUT, payload}),
    submit: payload => (dispatch) => {
        console.log('axios config is : ', AxiosConfig);
        tokenVC().then(response => {
            console.log('tokennnnnn response', response);
        });
        // signup(payload).then(response => {
        //     dispatch(AuthActions.tokenReceived(response));
        //     history.push(response.redirect);
        // });
    }
}

export default singupPageActions;