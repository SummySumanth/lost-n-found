// Dummy Action Remove this

export const selectUser = (user)=>{
    console.log('you clicked on user :', user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
}