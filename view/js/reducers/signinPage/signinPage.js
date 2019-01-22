import { SigninPageActionTypes } from '../../actions/signinPage/signinPageAction';


const initialState ={
    username : '',
    password : ''
}

const signinPageReducer = (state = initialState, action)=>{
    switch(action.type){
        case SigninPageActionTypes.USERNAME_INPUT : return {...state, username: action.payload}
        break;
        case SigninPageActionTypes.PASSWORD_INPUT : return {...state, password: action.payload}
        break;
        default : 
            return state;
    }
}

export default signinPageReducer;