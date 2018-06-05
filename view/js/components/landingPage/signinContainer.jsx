import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import classes from 'classNames';
import Icon from '@material-ui/core/Icon';


class Signin extends Component{
    render(){
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
                </div>
            </div>
            <div className='lnf-LPcard-actions'>
                <Link to="signin">
                    <Button color="primary" className={classes.button} >
                        Back
                    </Button>
                </Link>
                
                <Link to="signup">
                    <Button color="primary" className={classes.button} >
                        Submit
                    </Button>
                </Link>
            </div>
        </div>
        );
    }
}

export default Signin;