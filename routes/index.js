// import { request } from 'http';

let express = require('express');
let user = require('./api/user');
let authorized = require('./api/authorized');

let passportConfig = require('../passport');



let router = express.Router();
let { validateBody, schemas} = require('./../routes/helpers/routeHelper');

let passport = require('passport');

router.get('/', (request, response, next) =>{
    console.log('server got hit at api');
    response.send('<h1> router working </h1>');
    next();
});


router.get('/user', (request, response, next) =>{
    response.send('<h1> inside user get </h1>');
});

router.post('/user', validateBody(schemas.authSchema),user.createUser);

router.get('/authorized', passport.authenticate('jwt',{ session: false}), authorized.secret );

module.exports = router;
