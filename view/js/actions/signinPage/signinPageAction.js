import {AuthActions} from '../auth/auth';
import {signin} from '../../services/signin/signin';
import history from '../../routes/history';
import SigninPageActionTypes from './siginPageActionTypes';

const SigninPageActions = {
    usernameInputHandler: payload => ({type: SigninPageActionTypes.USERNAME_INPUT, payload}),

    passwordInputHandler: payload => ({type: SigninPageActionTypes.PASSWORD_INPUT, payload}),

    credentailsSubmit: (payload) => (dispatch) =>{
        signin(payload).then(response=>{
            dispatch (AuthActions.tokenReceived(response.data.token));    
            history.push(response.data.redirect);            
        }).catch(err=>{
            // dispatch (AuthActions.invalidUser(err));                
        });  
    },
}

export {
    SigninPageActionTypes,
    SigninPageActions
}