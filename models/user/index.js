const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

//Create Schema and Model
const userSchema = new Schema({
    password : {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique: true,
        lowercase: true
    }
});

userSchema.pre('save', async function(next){
    try{
        // Genereate a salt
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(this.password , salt);
        // Re-assign hashed version over original plain password
        this.password = passwordHash;
        next();
    }catch(error){
        next(error);
    }
});

userSchema.methods.isValidPassword = async function(newPassword){
    try{
        return await bcrypt.compare(newPassword, this.password);
    }catch(error){
        throw new Error(error);
    }
}
const user = mongoose.model('user', userSchema);

module.exports = user;