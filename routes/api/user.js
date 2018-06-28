const User  = require('../../models/user');
const JWT = require('jsonwebtoken');
const signToken = require('../../auth/signtoken');
const { JWT_SECRET } = require('../../auth/configurations');

module.exports = {
    createUser: async(req, res, next) =>{
        let {name, password, email, phone, displayPicture, address, bloodGroup, facebook, twitter } = req.value.body;
        
        let foundUser = await User.findOne({ email });

        if(foundUser){
           return  res.status(403).send({error: 'email is already in use'});
        } 
               
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

        userInstance.save().then(()=>{
            // Genereate Token 
            const token = signToken(userInstance, JWT_SECRET);

            // Respond with token
            res.status(200).json({ token });
        });
    },
    signinUser: async(req, res, next) =>{
        // Generate token
    }
};