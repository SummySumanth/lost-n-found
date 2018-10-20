import { combineReducers } from 'redux';

import signinReducer from './signinPage/signinPage';
import authReducer from './auth/auth';

const allReducers = combineReducers({
    auth: authReducer,
    signin : signinReducer
});

export default allReducers;