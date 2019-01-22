import {signin} from '../../services/signin/signin';
import auth from '../../services/auth/auth';
import history from '../../routes/history';
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
        let payload = {
            access_token : data
        }
        auth.googleSignin(payload).then(response=>{
            dispatch(AuthActions.tokenReceived(response.data.token));
            history.push(response.data.redirect);
        })
    },

    tokenValidity: () =>{
        console.log('asking token validity');
    }
}

export {
    AuthActionTypes,
    AuthActions
}

