import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import signupPageActions from '../../actions/signupPage/signupPageActions';

@connect(store =>({
    signup: store.signup
}))

class Signup extends Component{

    submitHandler = () =>{
        let credentials = {
            email: this.props.signup.username,
            password: this.props.signup.password
        }
        this.props.dispatch(signupPageActions.submit(credentials));
    }

    render(){
        return(
            <div className='lnf-LPcard-container'>
                <div className='lnf-LPcard-header'>Signup</div>
                <div className='lnf-LPcard-content'>
                    <div className='lnf-LPcard-content-body'>
                        <div className='lnf-LPcard-content-body-signin-local'>
                            <div className='lnf-LPcard-content-body-signin-local-input'>
                                <input type="email" placeholder='email' onChange={(e)=>this.props.dispatch(signupPageActions.usernameInputHandler(e.target.value))}/>
                                <input type="password" placeholder='password' onChange={(e)=>this.props.dispatch(signupPageActions.passwordInputHandler(e.target.value))}/>
                            </div>
                            <div className='lnf-LPcard-content-body-signin-local-submit'>
                                <input type="button" value='Sign up' onClick={()=>this.submitHandler()} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lnf-LPcard-actions'>
                    <Link to={'/'}>
                        <input type="button" value='Back'/>
                    </Link>
                    
                    <Link to="signin">
                        <input type="button" value='Signin'/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Signup;