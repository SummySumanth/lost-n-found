const raiseStatus = (response) =>{
    
    if(response.redirected){
        window.location.href = response.url;
    }
    
    return new Promise((resolve, reject)=>{
        if(response.status >= 200 && response.status <= 300){
            resolve(response);
        }else{
            reject(response.status);
        }
    });
}

export {
    raiseStatus
};
