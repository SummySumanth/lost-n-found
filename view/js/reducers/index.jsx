import { combineReducers } from 'redux';

import signinReducer from './signinPage/signinPage';
import authReducer from './auth/auth';
import signupPageReducer from './signupPage/signupPageReducer'

const allReducers = combineReducers({
    auth: authReducer,
    signin : signinReducer,
    signup : signupPageReducer
});

export default allReducers;