import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import LandingPage from './routes/landingPage/LandingPage';
import Home from './routes/home/home';
import NotFound from './routes/notFound/NotFound';



class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() => (    <Redirect to="/landing" />      )}/>
                    <Route path='/landing' component={LandingPage}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/*' component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;