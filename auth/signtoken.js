let JWT = require('jsonwebtoken');

let signToken = (user, JWT_SECRET) => JWT.sign({
    iss : 'lostNfound',
    sub: user._id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1) , //current time + one day ahead
}, JWT_SECRET);

module.exports = signToken;