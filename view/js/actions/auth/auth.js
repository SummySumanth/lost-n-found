import {signin} from '../../services/signin/signin';

const AuthActionTypes = {
    TOKEN_RECEIVED : 'TOKEN_RECEIVED',
    INVALID_USER : 'INVALID_USER',
    CREDENTIALS_SUBMIT : 'CREDENTIALS_SUBMIT',
    GOOGLE_SIGNIN : 'GOOGLE_SIGNIN',
    FACEBOOK_SIGNIN : 'FACEBOOK_SIGNIN'
}

const AuthActions = {
    tokenReceived: (token) => {
        console.log('stored in local storage, token changed:', token);
        localStorage.setItem('JWT_TOKEN', token);
        return {type: AuthActionTypes.TOKEN_RECEIVED}
    },

    invalidUser: (token) => ({type: AuthActionTypes.INVALID_USER, payload: token}),

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

