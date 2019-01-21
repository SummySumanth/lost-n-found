import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import {SigninPageActions} from '../../actions/signinPage/signinPageAction';
import {AuthActions} from '../../actions/auth/auth';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

class Signin extends Component{
    
    
    submitHandler(){
        const credentials = {
            email: this.props.signin.username,
            password: this.props.signin.password
        }
    
        this.props.dispatch(AuthActions.credentailsSubmit(credentials));
    }
    
    getErrorMessage(){
        const errObj = this.props.auth.errorMessage;
        if(errObj){
            return(
                <div>
                    INVALID USERNAME OR PASSWORD changed
                </div>
            );
        }
        
    }
    
    responseGoogle(response){
        console.log('google response : ', response);
        this.props.dispatch(AuthActions.googleOAuth(response.accessToken));
    }

    responseFacebook = (response) =>{
        console.log('facebook response : ', response);
    }

    render(){
        console.log('changed7653421');
        return(
            <div className='lnf-LPcard-container'>
                <div className='lnf-LPcard-header'>Signin</div>
                
                <div className='lnf-LPcard-content-body-signin'>
                    <div className='lnf-LPcard-content-body-signin-social'>    
                        <GoogleLogin
                            clientId='559665762654-6evhjhaomicm1fvqcu7bkfp0eku3q9q6.apps.googleusercontent.com'
                            render={renderProps => (
                                <img class='lnf-LPcard-content-body-signin-social-logo' src='/assets/images/google.png'  onClick={renderProps.onClick} />
                                )}
                            onSuccess={()=>this.responseGoogle}
                            onFailure={()=>this.responseGoogle}
                        />
                        <FacebookLogin
                            appId="273464073501603"
                            autoLoad={true}
                            fields='name,email,picture'
                            render={renderProps => (
                                <img class='lnf-LPcard-content-body-signin-social-logo' src='/assets/images/fb.png'  onClick={renderProps.onClick} />
                                )}
                            callback={this.responseFacebook}
                        />
                    </div>
                    <div className='lnf-LPcard-content-body-divider'>
                        or
                    </div>
                    <div className='lnf-LPcard-content-body-signin-local'>
                        <div className='lnf-LPcard-content-body-signin-local-input'>
                            <div>
                                {this.getErrorMessage()}
                            </div>
                            <input type="email" placeholder='email' onChange={(e)=>this.props.dispatch(SigninPageActions.usernameInputHandler(e.target.value))}/>
                            <input type="password" placeholder='password' onChange={(e)=>this.props.dispatch(SigninPageActions.passwordInputHandler(e.target.value))}/>
                        </div>
                        <div className='lnf-LPcard-content-body-signin-local-submit'>
                            <input type="button" value='Sign in' onClick={()=>this.submitHandler()} />
                        </div>
                    </div>
                </div>

                <div className='lnf-LPcard-actions'>
                    <Link to={'/'}>
                        <input type="button" value='Back'/>
                    </Link>

                    <Link to={this.props.location.pathname + '/signup'}>
                            <input type="button" value='Sign up'/>
                    </Link>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) =>{
    return{
        signin: state.signin,
        auth: state.auth
    }
}
let matchDispatchToProps = (dispatch) =>{
    let actions = bindActionCreators({
        SigninPageActions: SigninPageActions,
        AuthActions: AuthActions
    });
    return {...actions, dispatch};
}

export default connect(mapStateToProps, matchDispatchToProps)(Signin);