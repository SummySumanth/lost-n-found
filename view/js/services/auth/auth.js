import {raiseStatus} from '../../scripts/https';
import axios from 'axios';
import axiosConfig from '../../config/axiosServices';

const auth = {
    googleSignin : (payload) =>  axios
                                    .post('/api/oauth/google', payload)
                                    .then(raiseStatus)
                                    .catch(err=>{
                                        console.log('error was found at service,', err);
                                    }),
    facebookSignin : (payload) => axios
                                    .post('/api/signin', payload)
                                    .then(raiseStatus)
                                    .catch(err=>{
                                        console.log('error was found at service,', err);
                                    }),
}

export default auth;
