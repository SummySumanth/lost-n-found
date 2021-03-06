const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy ;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET, OAuth} =  require('./auth/configurations');
const googlePlusTokenStrategy =  require('passport-google-plus-token');
const facebookTokenStrategy = require('passport-facebook-token');
const logger = require('logger').createLogger('passport.log');
const User = require('./models/user');

//JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) =>{
    try{
        //find the user specified in token
        const user =  await User.findById(payload.sub);
        
        if(!user){
            return done(null, false);
        }
        
        done(null, user);

    }catch(error ){
        done(error, false);
    }
}
));

// GOOGLE OAUTH STRATEGY
passport.use('googleToken',new googlePlusTokenStrategy({
    clientID : OAuth.google.clientID,
    clientSecret  : OAuth.google.clientSecret
}, async (accessToken, refreshToken, profile, done)=>{
    try{
        const existingUser = await User.findOne({"google.id": profile.id});
        if(existingUser){
            return done(null, existingUser); 
        }
        const newUser = new User({
            method: 'google',
            google:{
                id:profile.id,
                email:profile.emails[0].value
            }
        });
        await newUser.save(); 
        done(null,newUser);
    }catch(error){
        done(error, false, error.message);
    }
    
}));

// FACEBOOK OAUTH STRATEGY
passport.use('facebookToken',new facebookTokenStrategy({
    clientID : OAuth.facebook.clientID,
    clientSecret  : OAuth.facebook.clientSecret
}, async (accessToken, refreshToken, profile, done)=>{
    console.log('profile', profile);
    console.log('access token', accessToken);
    console.log('refreshToken', refreshToken);
    try{
        const existingUser = await User.findOne({"facebook.id": profile.id});
        if(existingUser){
            return done(null, existingUser); 
        }
        const newUser = new User({
            method: 'facebook',
            facebook:{
                id:profile.id,
                email:profile.emails[0].value
            }
        });
        await newUser.save(); 
        done(null,newUser);
    }catch(error){
        done(error, false, error.message);
    }
    
}));

//LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async(email, password, done)=>{
    try{
        const user = await User.findOne({ "local.email": email });

        if(!user){
            return done(null, false);
        }
        
        const isMatch = await user.isValidPassword(password);
        
        if(!isMatch){
            return done(null,false);
        }

        return done(null,user);
    }catch(error) {
        return done(error,false);
    }   
}
));