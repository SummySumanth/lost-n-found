const User  = require('../../models/user');

module.exports = {
    createUser: async(req, res, next) =>{
        let {name, password, email, phone, displayPicture, address, bloodGroup, facebook, twitter } = req.value.body;
        
        // Check if the user with the same email already exists
        let foundUser = await User.findOne({ email });

        if(foundUser){
           return  res.status(403).send({error: 'email is already in use'});
        } 
               
        // Create new user
        let userInstance = new User({
            name, 
            password,
            email, 
            phone, 
            displayPicture, 
            address, 
            bloodGroup, 
            facebook, 
            twitter 
        });

        console.log('terying to create user')
        userInstance.save().then(()=>{
            // Respond with token
            res.end('User has been created');
        });

        
    }

    
};