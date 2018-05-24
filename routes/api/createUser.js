const User  = require('../../models/user');

let createUser = (data) =>{    
    console.log('creating user with data', data);
    let userInstance = new User({
        name: data.name,
        email: data.email,
        phone: data.number,
        displayPicture: data.displayPicture,
        address: data.address,
        bloodGroup: data.bloodGroup,
        facebook: data.facebook,
        twitter: data.twitter
    });

    userInstance.save().then(()=>{
        console.log('new user has been created');
    });
}

module.exports = createUser;