const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy ;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } =  require('./auth/configurations')
const User = require('./models/user');

//JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) =>{
    try{
        //find the user specified in token
        const user =  await User.findById(payload.sub);
        
        //if user doesn't exists, handle it
        if(!user){
            return done(null, false);
        }
        
        // otherwise, return the user
        done(null, user);

    }catch(error ){
        done(error, false);
    }
}
));

//LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async(email, password, done)=>{
    // Find the user given the email
    const user = await User.findOne({ email });

    // If not found, handle it
    if(!user){
        return done(null, false);
    }
    // If found, Check whether password is correct 

    // If not, handle it

    // Otherwise return the user
}
));