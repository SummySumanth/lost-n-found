let initialState = {
    id: 1,
    first: 'Rob',
    last: 'bob',
    age: 24,
    description: 'Cool Guy',
    thumbnail: 'asdfasdfasdf'
};

export default function(state=initialState, action){

    switch(action.type){
        case 'USER_SELECTED':
            return {
                ...state,
                activeUser: action.payload
            }
            break;
    }
    return state;

}