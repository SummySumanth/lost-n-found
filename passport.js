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
        try{
            // Find the user given the email
        const user = await User.findOne({ email });

        // If not found, handle it
        if(!user){
            return done(null, false);
        }
        // If found, Check whether password is correct 
        const isMatch = await user.isValidPassword(password);
        
        // If not, handle it
        if(!isMatch){
            return done(null,false);
        }
        // Otherwise return the user
        return done(null,user);
    }catch(error) {
        return done(error,false);
    }
    
}
));