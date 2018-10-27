import {AuthActionTypes} from '../../actions/auth/auth';

const initialState = {
    isAuthenticated : false,
    token: '',
    errorMessage: ''
}

const AuthReducer = ((state = initialState, action)=>{
    switch(action.type){
        case AuthActionTypes.TOKEN_RECEIVED: return ({...state, ...action.payload, isAuthenticated: true});
        break;
        case AuthActionTypes.INVALID_USER: return ({errorMessage: action.payload, isAuthenticated: false, token: ''});
        break;
        case AuthActionTypes.GOOGLE_SIGNIN : return {...state}
        break;
        case AuthActionTypes.FACEBOOK_SIGNIN : return {...state}
        break;
        default :
            return state;
    }
})

export default AuthReducer;






                            