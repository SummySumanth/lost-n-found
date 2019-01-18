import React,{ Component } from 'react';
import { Link } from 'react-router-dom';



class Signup extends Component{
    render(){
        return(
            <div className='lnf-LPcard-container'>
                <div className='lnf-LPcard-header'>Signup</div>
                <div className='lnf-LPcard-content'>
                    <div className='lnf-LPcard-content-body'>
                        this is signup123
                    </div>
                </div>
                <div className='lnf-LPcard-actions'>
                    <Link to={'/'}>
                        <input type="button" value='Back'/>
                    </Link>
                    
                    <Link to="signup">
                        <input type="button" value='Signup'/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Signup;