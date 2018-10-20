import {signin} from '../../services/auth/auth';

const AuthActionTypes = {
    TOKEN_RECEIVED : 'TOKEN_RECEIVED',
    INVALID_USER : 'INVALID_USER',
    CREDENTIALS_SUBMIT : 'CREDENTIALS_SUBMIT',
    GOOGLE_SIGNIN : 'GOOGLE_SIGNIN',
    FACEBOOK_SIGNIN : 'FACEBOOK_SIGNIN'
}

const AuthActions = {
    tokenReceived: (token) => {
        return {type: AuthActionTypes.TOKEN_RECEIVED, payload: token}
    },

    invalidUser: (token) => ({type: AuthActionTypes.INVALID_USER, payload: token}),
    
    credentailsSubmit: (data) => (dispatch) =>{
        signin(data).then(response=>{
            dispatch (AuthActions.tokenReceived(response));                
        }).catch(err=>{
            dispatch (AuthActions.invalidUser(err));                
        });  
    }    
}

export {
    AuthActionTypes,
    AuthActions
}

