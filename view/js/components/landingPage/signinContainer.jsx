import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import classes from 'classNames';
import Icon from '@material-ui/core/Icon';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {SigninPageActions} from '../../actions/signinPage/signinPageAction';
import {AuthActions} from '../../actions/auth/auth';

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
    render(){
        console.log('changed7653421');
        return(
            <div className='lnf-LPcard-container'>
            <div className='lnf-LPcard-header'>Signin</div>
            <div className='lnf-LPcard-content'>
                <div className='lnf-LPcard-content-body-signin'>
                    <div className='lnf-LPcard-content-body-signin-social'>
                        {/* <div class='lnf-LPcard-content-body-signin-social-logo'> */}
                            <img class='lnf-LPcard-content-body-signin-social-logo' src='/assets/images/google.png' />
                        {/* </div> */}
                        {/* <div class='lnf-LPcard-content-body-signin-social-logo'> */}
                            <img class='lnf-LPcard-content-body-signin-social-logo' src='/assets/images/fb.png' />
                        {/* </div> */}
                    </div>
                    <div className='lnf-LPcard-content-body-divider'>
                        or
                    </div>
                    <div className='lnf-LPcard-content-body-signin-local'>
                        <input type="email" placeholder='email' onChange={(e)=>this.props.dispatch(SigninPageActions.usernameInputHandler(e.target.value))}/>
                        <input type="password" placeholder='password' onChange={(e)=>this.props.dispatch(SigninPageActions.passwordInputHandler(e.target.value))}/>
                        {this.getErrorMessage()}
                        
                    </div>
                </div>
            </div>
            <div className='lnf-LPcard-actions'>
                <Link to={'/'}>
                    <Button color="primary" className={classes.button} >
                        Back
                    </Button>
                </Link>
                
                <Button color="primary" className={classes.button} onClick={()=>this.submitHandler()} >
                    Submit
                </Button>
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