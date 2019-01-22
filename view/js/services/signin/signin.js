import {raiseStatus} from '../../scripts/https';
import axios from 'axios';
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

export {
    signup
}
