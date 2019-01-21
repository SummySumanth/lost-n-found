import React,{ Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends Component{

    componentWillMount(){
        console.log('component will mount;')
    }

    render(){
        return(
            <div>
                This is the home page
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

export default connect(mapStateToProps, matchDispatchToProps)(Home);
