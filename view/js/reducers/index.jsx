import { combineReducers } from 'redux';

// Dummy Reducers Delete these imports
import usersReducers from './dummyReducerDeleteThis/dummyA';
import activeUserReducer from './dummyReducerDeleteThis/activeUserReducer';

// Dummy Reducers, Remove these before starting 
const allReducers = combineReducers({
    users : usersReducers,
    activeUser : activeUserReducer
});

export default allReducers;