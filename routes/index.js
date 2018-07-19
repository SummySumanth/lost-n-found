let express = require('express');
let user = require('./api/user');
let authorized = require('./api/authorized');

let passportConfig = require('../passport');
let router = express.Router();
let { validateBody, schemas} = require('./../routes/helpers/routeHelper');

let passport = require('passport');

router.get('/', (request, response, next) =>{
    response.send('<h1> router working </h1>');
    next();
});

// For Signin
router.get('/user', user.signinUser);

// For Signup
router.post('/user', validateBody(schemas.authSchema),user.createUser);

// For Queries 
router.get('/authorized', passport.authenticate('jwt',{ session: false}), authorized.secret );

module.exports = router;
