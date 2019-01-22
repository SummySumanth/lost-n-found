import {raiseStatus} from '../../scripts/https';
import axios from 'axios';
import axiosConfig from '../../config/axiosServices';

const tokenVC = () => axios
                        .get('/api/authorized',axiosConfig)
                        .then(raiseStatus)
                        .catch(err=>{
                            console.log('error was found at service,', err);
                        });

export default tokenVC;
