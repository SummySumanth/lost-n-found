import {raiseStatus} from '../../scripts/https';
import axios from 'axios';
import axiosConfig from '../../config/axiosServices';

const tokenVC = () => axios.get('/api/authorized',axiosConfig).then(res=>{
    console.log('validity checker response', res);
});



const signin = (payload) => fetch('/api/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(raiseStatus);
        // .catch(err=>{
        //     console.log('error was found at service,', err);
        // });

export default tokenVC;
