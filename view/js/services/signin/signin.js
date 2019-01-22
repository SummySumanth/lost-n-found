import {raiseStatus} from '../../scripts/https';
import axios from 'axios';
import axiosConfig from '../../config/axiosServices';

const signin = (payload) => axios
                                .post('/api/signin', payload, axiosConfig)
                                .then(raiseStatus)
                                .catch(err=>{
                                    console.log('error was found at service,', err);
                                });

export {
    signin
}
