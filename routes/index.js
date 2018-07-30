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
router.post('/signin',validateBody(schemas.signinSignupSchema), passport.authenticate('local',{ session: false}),user.signinUser);

// For GOOGLE OAUTH
router.post('/oauth/google', passport.authenticate('googleToken', {session: false}))

// For Signup
router.post('/signup', validateBody(schemas.signinSignupSchema),user.createUser);

// For Queries 
router.get('/authorized', passport.authenticate('jwt',{ session: false}), authorized.secret );

module.exports = router;
