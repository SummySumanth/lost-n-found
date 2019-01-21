import React,{ Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './routes/history';
import Loadable from 'react-loadable';

// import LandingPage from './routes/landingPage/LandingPage';
// import Home from './routes/home/home';
// import NotFound from './routes/notFound/NotFound';



function MyLoadingComponent() {
    return <div>Loading...</div>;
}
  
const LandingPage = Loadable({
    loader: () => import('./routes/landingPage/LandingPage'),
    loading: MyLoadingComponent,
});

const Home = Loadable({
    loader: () => import('./routes/home/home'),
    loading: MyLoadingComponent,
});

const NotFound = Loadable({
    loader: () => import('./routes/notFound/NotFound'),
    loading: MyLoadingComponent,
});


class Routes extends Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path='/' render={() => (    <Redirect to="/landing" />      )}/>
                    <Route path='/landing' component={LandingPage}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/notFound' component={NotFound}/>
                    <Route path='/*' component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;