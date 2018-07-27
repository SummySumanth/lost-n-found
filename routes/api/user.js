const User  = require('../../models/user');
const JWT = require('jsonwebtoken');
const signToken = require('../../auth/signtoken');
const { JWT_SECRET } = require('../../auth/configurations');
let logger = require('logger').createLogger('development.log');
module.exports = {
    createUser: async(req, res, next) =>{
        let {email, password} = req.value.body;
        
        let foundUser = await User.findOne({ email });

        if(foundUser){
           return  res.status(403).send({error: 'email is already in use'});
        } 
               
        let userInstance = new User({
            email, 
            password
        });

        userInstance.save().then(()=>{
            // Genereate Token 
            const token = signToken(userInstance, JWT_SECRET);

            // Respond with token
            res.status(200).json({ token });
            logger.info(`Created User : ${userInstance.email} `);
        });
    },
    signinUser: async(req, res, next) =>{
        // Generate token

        res.end('Responding from Signin User');
    }
};