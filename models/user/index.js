const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

//Create Schema and Model
const userSchema = new Schema({
    method  : {
        type : String,
        required : true,
        enum : ['local','google','facebook']
    },
    local : {
        email: {
            type : String,
            unique: true,
            lowercase: true
        },
        password : {
            type : String
        }
    },
    google : {
        id : {
            type :  String
        },
        email : {
            type : String,
            lowercase : true
        }
    },
    facebook : {
        id : {
            type :  String
        },
        email : {
            type : String,
            lowercase : true
        }
    }
});

userSchema.pre('save', async function(next){
    try{
        if(this.method !== 'local'){
            next();
        }
        // Genereate a salt
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(this.local.password , salt);
        // Re-assign hashed version over original plain password
        this.local.password = passwordHash;
        next();
    }catch(error){
        next(error);
    }
});

userSchema.methods.isValidPassword = async function(newPassword){
    try{
        return await bcrypt.compare(newPassword, this.local.password);
    }catch(error){
        throw new Error(error);
    }
}
const user = mongoose.model('user', userSchema);

module.exports = user;