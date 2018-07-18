module.exports = {
    secret: async(req, res, next) =>{
        console.log('I manage to get here !!!!');
        res.end('Congratulations, You have been authorized');
    } 
};
