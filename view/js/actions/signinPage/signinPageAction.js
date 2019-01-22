
const SigninPageActionTypes = {
    USERNAME_INPUT: 'USERNAME_INPUT',
    PASSWORD_INPUT:  'PASSWORD_INPUT',
}

const SigninPageActions = {
    usernameInputHandler: payload => ({type: SigninPageActionTypes.USERNAME_INPUT, payload}),

    passwordInputHandler: payload => ({type: SigninPageActionTypes.PASSWORD_INPUT, payload}),
}

export {
    SigninPageActionTypes,
    SigninPageActions
}