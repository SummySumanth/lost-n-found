let express = require('express');
let router = express.Router();

router.get('/api', (request, response) =>{
    response.send('<h1> router working </h1>');
});

module.exports = router;
