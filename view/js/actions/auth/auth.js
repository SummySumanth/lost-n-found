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
        console.log('stored in local storage, token changed:', token.token);
        localStorage.setItem('JWT_TOKEN', token.token);
        return {type: AuthActionTypes.TOKEN_RECEIVED}
    },

    invalidUser: (token) => ({type: AuthActionTypes.INVALID_USER, payload: token}),
    
    credentailsSubmit: (data) => (dispatch) =>{
        signin(data).then(response=>{
            dispatch (AuthActions.tokenReceived(response));                
        }).catch(err=>{
            dispatch (AuthActions.invalidUser(err));                
        });  
    },

    googleOAuth: (data) => (dispatch) =>{
        console.log('action received access token', data);
    },

    tokenValidity: () =>{
        console.log('asking token validity');
    }
}

export {
    AuthActionTypes,
    AuthActions
}

