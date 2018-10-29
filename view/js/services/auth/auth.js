import {raiseStatus} from '../../scripts/https';

const signin = (payload) => fetch('/api/signin',{
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
    signin
}
