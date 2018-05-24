import React,{ Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../../components/landingPage/welcomeContainer';
import Signin from '../../components/landingPage/signinContainer';
import Signup from '../../components/landingPage/signupContainer';

class LandingPage extends Component{


    render(){
        return(
            <div>
                <video className='lnf-landingPage-videoBg' poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsinline autoplay='autoplay' muted loop>
                    <source src="/assets/videos/bg.mp4#t=3" type="video/mp4" />
                </video>

                <div className='lnf-landingpage-container'>
                    <div className='lnf-landingPage-titleLeft' >
                        Lost<br />
                        &<br />
                        Found
                    </div>

                    <div className='lnf-landingpage-card-container'>
                        <Switch>
                            <Route path='/landing/' component={Welcome}/>
                            <Route path='/landing/signin' component={Signin}/>
                            <Route path='/landing/signup' component={Signup}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}


let mapStateToProps = (state) =>{
    return {
        users : state.users,
        activeUser : state.activeUser,
    }
}

let matchDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        // selectUser: selectUser
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LandingPage);
