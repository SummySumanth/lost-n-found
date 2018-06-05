import React,{ Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Welcome from '../../components/landingPage/welcomeContainer';
import Signin from '../../components/landingPage/signinContainer';
import Signup from '../../components/landingPage/signupContainer';


import '../../../scss/Components/landingPage/landingPage.scss';


class LandingPage extends Component{

    
    render(){
    const { match } = this.props;    
        return(
            <div>
                <video className='lnf-landingPage-videoBg' poster="/assets/images/poster.jpg" id="bgvid" playsinline autoplay='autoplay' muted loop>
                    <source src="/assets/videos/bg.webm#t=3" type="video/webm" />
                </video>

                <div className='lnf-landingpage-container'>
                    <div className='lnf-landingpage-container-body'>
                        <div className='lnf-landingPage-titleLeft' >
                            Lost<br />
                            &<br />
                            Found
                        </div>

                        <div className='lnf-landingpage-card-container'>
                            <Switch>
                                <Route exact path={`${match.path}`} component={Welcome}/>
                                <Route path={`${match.path}/signin`} component={Signin}/>
                                <Route path={`${match.path}/signup`} component={Signup}/>
                                <Route path={`${match.path}/*`}  render={() => (    <Redirect to="/notFound" />      )}/>
                            </Switch>
                        </div>
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
