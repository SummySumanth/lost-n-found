// import { request } from 'http';

let express = require('express');
let user = require('./api/user')

let router = express.Router();
let { validateBody, schemas} = require('./../routes/helpers/routeHelper');

router.get('/', (request, response, next) =>{
    console.log('server got hit at api');
    next();
    response.send('<h1> router working </h1>');
});


router.get('/user', (request, response, next) =>{
    response.send('<h1> inside user get </h1>');
});

router.post('/user', validateBody(schemas.authSchema),user.createUser);


module.exports = router;
