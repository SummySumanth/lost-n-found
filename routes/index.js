// import { request } from 'http';

let express = require('express');
let createUser = require('./api/createUser')

let router = express.Router();

router.get('/', (request, response) =>{
    console.log('server got hit at api');
    response.send('<h1> router working </h1>');
});


router.get('/user', (request, response) =>{
    response.send('<h1> inside user get </h1>');
});

router.post('/user', (request, response) =>{
    // createUser(dummyUser);
    response.end();
});


module.exports = router;
