import {raiseStatus} from '../../scripts/https';
import axios from 'axios';
import axiosConfig from '../../config/axiosServices';

const signup = (payload) => axios
                                .post('/api/signup', payload)
                                .then(raiseStatus)
                                .catch(err=>{
                                    console.log('error was found at service,', err);
                                });

export {
    signup
}
