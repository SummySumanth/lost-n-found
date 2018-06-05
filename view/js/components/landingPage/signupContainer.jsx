import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import classes from 'classNames';
import Icon from '@material-ui/core/Icon';


class Signup extends Component{
    render(){
        return(
            <div className='lnf-LPcard-container'>
                <div className='lnf-LPcard-header'>Signup</div>
                <div className='lnf-LPcard-content'>
                    <div className='lnf-LPcard-content-body'>
                        this is signup
                    </div>
                </div>
                <div className='lnf-LPcard-actions'>
                    <Link to="signin">
                        <Button color="primary" className={classes.button} >
                            Sign in
                        </Button>
                    </Link>
                    
                    <Link to="signup">
                        <Button color="primary" className={classes.button} >
                            Sign up
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Signup;