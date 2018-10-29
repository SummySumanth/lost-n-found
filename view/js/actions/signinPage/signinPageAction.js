
const SigninPageActionTypes = {
    USERNAME_INPUT: 'USERNAME_INPUT',
    PASSWORD_INPUT:  'PASSWORD_INPUT',
}

const SigninPageActions = {
    usernameInputHandler: data => ({type: SigninPageActionTypes.USERNAME_INPUT, payload: data}),

    passwordInputHandler: data => ({type: SigninPageActionTypes.PASSWORD_INPUT, payload: data}),
}

export {
    SigninPageActionTypes,
    SigninPageActions
}