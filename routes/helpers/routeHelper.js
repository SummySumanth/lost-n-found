const joi = require('joi');

module.exports = {
    validateBody : (schema) =>{
        return (req,res,next) =>{
            const result =  joi.validate(req.body, schema );
            console.log(req.body);
            if(result.error){
                return res.status(400).json(result.error)
            }
            if(!req.value){ 
                console.log('req not value present'); 
                req.value = {}; 
            }
            req.value['body'] = result.value;
            next();
        }
    },
    schemas: {
        authSchema: joi.object().keys({
            email: joi.string().email().required(),
            password: joi.string().required(),
            name: joi.string().required(),
            phone: joi.number().required(),
            displayPicture: joi.string().required(),
            address: joi.string().required(),
            bloodGroup: joi.string().required(),
            facebook: joi.string().required(),
            twitter: joi.string().required()
        })
    }
}