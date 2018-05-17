import React,{ Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import User from './User';
import {selectUser} from '../actions/index'
class DummyComponent extends Component{

    createListItems(){
        return this.props.users.map((user)=>{
            return(
                <li 
                    key={user.id}
                    onClick={()=>{
                            this.props.selectUser(user)
                        }
                    }
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }

    getUserDetails(){
        return(
            <div>
                First Name : {this.props.activeUser.first}
                Last Name : {this.props.activeUser.last}
                Description : {this.props.activeUser.description}
                Age: {this.props.activeUser.age}
            </div>
        );
    }
    
    render(){
        return(
            <div>
                <h3>List of users</h3>
                <ul>
                    {this.createListItems()}
                </ul>
                <hr />
                <h3>User Details</h3>
                {this.getUserDetails()}
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
        selectUser: selectUser
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DummyComponent);